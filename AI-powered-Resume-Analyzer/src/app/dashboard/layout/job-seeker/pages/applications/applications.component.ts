import { Component } from '@angular/core';



interface Application {
  id: number;
  company: string;
  role: string;
  status: 'Pending' | 'Interview' | 'Rejected' | 'Accepted';
  appliedOn: Date;
}



@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  applications: Application[] = [
    {
      id: 1,
      company: 'Google',
      role: 'Frontend Developer',
      status: 'Pending',
      appliedOn: new Date('2026-02-20')
    },
    {
      id: 2,
      company: 'StartupXYZ',
      role: 'Full Stack Engineer',
      status: 'Interview',
      appliedOn: new Date('2026-02-15')
    },
    {
      id: 3,
      company: 'DesignHub',
      role: 'UI/UX Designer',
      status: 'Rejected',
      appliedOn: new Date('2026-02-10')
    }
  ];

  // 🔢 Dynamic Stats
  get totalApplications(): number {
    return this.applications.length;
  }

  get pendingCount(): number {
    return this.applications.filter(a => a.status === 'Pending').length;
  }

  get interviewCount(): number {
    return this.applications.filter(a => a.status === 'Interview').length;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'bg-amber-100 text-amber-600';
      case 'Interview':
        return 'bg-emerald-100 text-emerald-600';
      case 'Rejected':
        return 'bg-rose-100 text-rose-600';
      case 'Accepted':
        return 'bg-indigo-100 text-indigo-600';
      default:
        return '';
    }
  }

}
