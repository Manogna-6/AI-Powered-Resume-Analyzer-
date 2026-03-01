
// Reviews interview videos.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-review',
  templateUrl: './interview-review.component.html',
  styleUrls: ['./interview-review.component.css']
})
export class InterviewReviewComponent implements OnInit{
interviews: any[] = [];
  filteredInterviews: any[] = [];

  selectedFilter: string = 'All Interviews';

  constructor() {}

  ngOnInit(): void {
    this.loadInterviews();
  }

  loadInterviews() {
    // 🔥 Replace with API later
    this.interviews = [
      {
        name: 'Sarah Johnson',
        role: 'Frontend Developer',
        date: 'March 20, 2025',
        time: '2:00 PM',
        type: 'Video Interview',
        interviewer: 'John Smith',
        rating: 4,
        notes: 'Strong React knowledge. Good communication skills. Needs improvement in system design concepts.',
        status: 'Pending Review'
      },
      {
        name: 'Michael Chen',
        role: 'Full Stack Engineer',
        date: 'March 18, 2025',
        time: '10:00 AM',
        type: 'Video Interview',
        interviewer: 'Lisa Ray',
        rating: 5,
        notes: 'Excellent backend architecture knowledge. Strong problem-solving ability.',
        status: 'Completed'
      }
    ];

    this.filteredInterviews = this.interviews;
  }

  filterInterviews() {
    if (this.selectedFilter === 'All Interviews') {
      this.filteredInterviews = this.interviews;
    } else {
      this.filteredInterviews = this.interviews.filter(
        interview => interview.status === this.selectedFilter
      );
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-600';
      case 'Completed':
        return 'bg-green-100 text-green-600';
      case 'Rejected':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  submitReview(interview: any) {
    interview.status = 'Completed';
    this.filterInterviews();
  }

}
