import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
 analytics = {
    totalApplications: 24,
    shortlisted: 12,
    interviews: 8,
    offers: 2,
    insights: [
      "You get 2x more responses from Remote jobs.",
      "Applications sent in the morning perform 18% better.",
      "Your resume score increased by 5% this month."
    ]
  };

  // ===== Derived Values =====
  get pending(): number {
    return this.analytics.totalApplications - this.analytics.interviews;
  }

  get successRate(): number {
    if (!this.analytics.totalApplications) return 0;
    return Math.round(
      (this.analytics.interviews / this.analytics.totalApplications) * 100
    );
  }

  get shortlistedPercent(): number {
    return Math.round(
      (this.analytics.shortlisted / this.analytics.totalApplications) * 100
    );
  }

  get interviewPercent(): number {
    return Math.round(
      (this.analytics.interviews / this.analytics.totalApplications) * 100
    );
  }

  get offerPercent(): number {
    return Math.round(
      (this.analytics.offers / this.analytics.totalApplications) * 100
    );
  }
}

