import { Component } from '@angular/core';
import { DashboardStateService } from './../../../../services/dashboard-state.service';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  match: number;
}

@Component({
  selector: 'app-job-matches',
  templateUrl: './job-matches.component.html',
  styleUrls: ['./job-matches.component.css']
})
export class JobMatchesComponent {
 resumeScore = 0;

  searchTerm = '';
  selectedLocation = 'All Locations';
  selectedType = 'All Types';

  jobs: Job[] = [];
  filteredJobs: Job[] = [];

  constructor(private dashboardState: DashboardStateService) {

    this.dashboardState.resumeScore$.subscribe(score => {
      this.resumeScore = score;
      this.generateJobs();
    });
  }

  generateJobs() {

    // Simulate jobs based on resume score
    this.jobs = [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'Google',
        location: 'Remote',
        type: 'Full-time',
        salary: '$120k - $140k',
        description: 'Looking for Angular/React developer.',
        match: this.resumeScore
      },
      {
        id: 2,
        title: 'Full Stack Engineer',
        company: 'StartupXYZ',
        location: 'Hybrid',
        type: 'Full-time',
        salary: '$100k - $130k',
        description: 'Angular + Node.js + Cloud.',
        match: Math.max(this.resumeScore - 5, 60)
      },
      {
        id: 3,
        title: 'UI Developer',
        company: 'DesignHub',
        location: 'Onsite',
        type: 'Part-time',
        salary: '$80k - $100k',
        description: 'Frontend with strong UI skills.',
        match: Math.max(this.resumeScore - 10, 50)
      }
    ];

    this.applyFilters();
  }

  applyFilters() {

    this.filteredJobs = this.jobs.filter(job => {

      const matchesSearch =
        job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesLocation =
        this.selectedLocation === 'All Locations' ||
        job.location === this.selectedLocation;

      const matchesType =
        this.selectedType === 'All Types' ||
        job.type === this.selectedType;

      return matchesSearch && matchesLocation && matchesType;
    });
  }

  onSearchChange() {
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }
}
