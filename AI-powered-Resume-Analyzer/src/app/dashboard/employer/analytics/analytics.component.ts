import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  analytics: any;     // ✅ Using any (no model file)
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  // 🔥 Load analytics from backend
  loadAnalytics(): void {

    // 🔹 OPTION A: If you have backend API
    /*
    this.http.get<any>('http://localhost:8080/api/analytics')
      .subscribe({
        next: (res) => {
          this.analytics = res;
          this.loading = false;
        },
        error: (err) => {
          console.error('Analytics error:', err);
          this.loading = false;
        }
      });
    */

    // 🔹 OPTION B: Temporary mock data (if backend not ready)
    setTimeout(() => {
      this.analytics = {
        totalJobs: 24,
        totalApplicants: 312,
        interviews: 42,
        hires: 8,
        screened: 180,
        interviewed: 42
      };
      this.loading = false;
    }, 800);
  }

  // 🔥 Funnel percentage calculation
  getPercentage(value: number | undefined): number {
    if (!value || !this.analytics?.totalApplicants) {
      return 0;
    }
    return (value / this.analytics.totalApplicants) * 100;
  }

}