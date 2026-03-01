import { Component } from '@angular/core';
import { DashboardStateService } from './../../../../services/dashboard-state.service';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent  {

     resumeScore = 0;
  jobMatches = 0;
  applications = 0;
  interviews = 0;

  resumeFileName: string | null = null;

  constructor(private dashboardState: DashboardStateService) {

    this.dashboardState.resumeScore$.subscribe(score => {
      this.resumeScore = score;
    });

    this.dashboardState.jobMatches$.subscribe(value => {
      this.jobMatches = value;
    });

    this.dashboardState.applications$.subscribe(value => {
      this.applications = value;
    });

    this.dashboardState.interviews$.subscribe(value => {
      this.interviews = value;
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    this.resumeFileName = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const score = this.calculateScore(text);

      this.dashboardState.updateDashboard(score);
    };

    reader.readAsText(file);
  }

  calculateScore(text: string): number {
    let score = 50;

    const keywords = [
      'angular','react','javascript','typescript',
      'node','html','css','mongodb','sql'
    ];

    keywords.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        score += 5;
      }
    });

    return Math.min(score, 100);
  }

  reset() {
    this.resumeFileName = null;
    this.dashboardState.resetDashboard();
  }
}