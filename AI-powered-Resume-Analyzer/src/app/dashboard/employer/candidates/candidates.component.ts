//  Shows applied candidates.


import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit{

  candidates: any[] = [];
  filteredCandidates: any[] = [];

  searchText: string = '';
  selectedStatus: string = 'All Status';
  selectedPosition: string = 'All Positions';

  constructor() {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates() {
    // 🔥 Replace this with API later
    this.candidates = [
      {
        name: 'Sarah Johnson',
        role: 'Frontend Developer',
        location: 'New York, USA',
        experience: 5,
        skills: 'React, Angular, TypeScript',
        status: 'Screening',
        match: 95
      },
      {
        name: 'Michael Chen',
        role: 'Full Stack Engineer',
        location: 'Toronto, Canada',
        experience: 7,
        skills: 'Node, Angular, MongoDB',
        status: 'Interview',
        match: 92
      },
      {
        name: 'Emily Davis',
        role: 'Product Designer',
        location: 'London, UK',
        experience: 6,
        skills: 'Figma, UX Research, UI Systems',
        status: 'Hired',
        match: 88
      }
    ];

    this.filteredCandidates = this.candidates;
  }

  filterCandidates() {

    this.filteredCandidates = this.candidates.filter(candidate => {

      const matchesSearch =
        candidate.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(this.searchText.toLowerCase()) ||
        candidate.role.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        candidate.status === this.selectedStatus;

      const matchesPosition =
        this.selectedPosition === 'All Positions' ||
        candidate.role.includes(this.selectedPosition);

      return matchesSearch && matchesStatus && matchesPosition;
    });
  }

  getInitials(name: string): string {
    return name.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Screening':
        return 'bg-yellow-100 text-yellow-600';
      case 'Interview':
        return 'bg-blue-100 text-blue-600';
      case 'Hired':
        return 'bg-green-100 text-green-600';
      case 'Rejected':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }


}
