import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardStateService {

  private resumeScoreSubject = new BehaviorSubject<number>(0);
  private jobMatchesSubject = new BehaviorSubject<number>(0);
  private applicationsSubject = new BehaviorSubject<number>(0);
  private interviewsSubject = new BehaviorSubject<number>(0);

  resumeScore$ = this.resumeScoreSubject.asObservable();
  jobMatches$ = this.jobMatchesSubject.asObservable();
  applications$ = this.applicationsSubject.asObservable();
  interviews$ = this.interviewsSubject.asObservable();

  updateDashboard(score: number) {

    this.resumeScoreSubject.next(score);

    // 🔥 Smart logic based on resume score
    const matches = Math.floor(score / 10);
    const applications = Math.floor(matches / 2);
    const interviews = Math.floor(applications / 2);

    this.jobMatchesSubject.next(matches);
    this.applicationsSubject.next(applications);
    this.interviewsSubject.next(interviews);
  }

  resetDashboard() {
    this.resumeScoreSubject.next(0);
    this.jobMatchesSubject.next(0);
    this.applicationsSubject.next(0);
    this.interviewsSubject.next(0);
  }
}