import { Component } from '@angular/core';

interface Interview {
  id: number;
  role: string;
  company: string;
  round: string;
  date: Date;
  time: string;
  mode: string;
  location?: string;
  status: 'Upcoming' | 'Scheduled' | 'Completed' | 'Cancelled';
}


@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent {
 interviews: Interview[] = [
    {
      id: 1,
      role: 'Frontend Developer',
      company: 'Google',
      round: 'Technical Round',
      date: new Date('2026-03-03'),
      time: '10:00 AM',
      mode: 'Online (Google Meet)',
      status: 'Upcoming'
    },
    {
      id: 2,
      role: 'Full Stack Engineer',
      company: 'StartupXYZ',
      round: 'HR Round',
      date: new Date('2026-03-05'),
      time: '2:30 PM',
      mode: 'Onsite',
      location: 'Bangalore',
      status: 'Scheduled'
    }
  ];

  // 📊 Dynamic Stats
  get upcomingCount(): number {
    return this.interviews.filter(i =>
      i.status === 'Upcoming' || i.status === 'Scheduled'
    ).length;
  }

  get completedCount(): number {
    return this.interviews.filter(i => i.status === 'Completed').length;
  }

  get cancelledCount(): number {
    return this.interviews.filter(i => i.status === 'Cancelled').length;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Upcoming':
        return 'bg-emerald-100 text-emerald-600';
      case 'Scheduled':
        return 'bg-indigo-100 text-indigo-600';
      case 'Completed':
        return 'bg-gray-200 text-gray-700';
      case 'Cancelled':
        return 'bg-rose-100 text-rose-600';
      default:
        return '';
    }
  }

  getDaysRemaining(date: Date): string {
    const today = new Date();
    const diff = date.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));

    if (days > 0) {
      return `Starts in ${days} day${days > 1 ? 's' : ''}`;
    } else if (days === 0) {
      return 'Today';
    } else {
      return 'Completed';
    }
  }

}
