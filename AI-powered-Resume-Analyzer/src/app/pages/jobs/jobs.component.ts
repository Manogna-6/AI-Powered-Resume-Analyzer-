//  Shows available jobs.


import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
 jobs: Job[] = [
    {
      id: 1,
      companyInitials: 'FD',
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Hyderabad',
      type: 'Full-time',
      salary: '₹12L - ₹18L',
      posted: '2 days ago',
      skills: ['React', 'TypeScript'],
      match: 95
    },
    {
      id: 2,
      companyInitials: 'DS',
      title: 'Data Scientist',
      company: 'DataDriven',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹14L - ₹19L',
      posted: '5 days ago',
      skills: ['Python', 'ML'],
      match: 78
    },
    {
      id: 3,
      companyInitials: 'PD',
      title: 'Python Developer',
      company: 'SmartIdeas',
      location: 'Chennai',
      type: 'Part-time',
      salary: '₹6L - ₹9L',
      posted: '3 days ago',
      skills: ['Python', 'Django'],
      match: 65
    },
    {
      id: 4,
      companyInitials: 'FS',
      title: 'Full Stack Developer',
      company: 'GlobalTech',
      location: 'Pune',
      type: 'Full-time',
      salary: '₹10L - ₹15L',
      posted: '1 day ago',
      skills: ['Angular', 'Node'],
      match: 88
    }
  ];

  filteredJobs: Job[] = [];

  searchText: string = '';
  selectedLocation: string = '';
  selectedTypes: string[] = [];

  ngOnInit(): void {
    this.filteredJobs = [...this.jobs];
  }

  applyFilters(): void {

    this.filteredJobs = this.jobs.filter(job => {

      const matchesSearch =
        job.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.skills.some(skill =>
          skill.toLowerCase().includes(this.searchText.toLowerCase())
        );

      // Location logic
      let matchesLocation = true;

      if (this.selectedLocation === 'Others') {
        matchesLocation =
          job.location !== 'Hyderabad' &&
          job.location !== 'Bangalore' &&
          job.location !== 'Chennai';
      } else if (this.selectedLocation !== '') {
        matchesLocation = job.location === this.selectedLocation;
      }

      const matchesType =
        this.selectedTypes.length === 0 ||
        this.selectedTypes.includes(job.type);

      return matchesSearch && matchesLocation && matchesType;
    });
  }

  onTypeChange(event: any) {
    const value = event.target.value;

    if (event.target.checked) {
      this.selectedTypes.push(value);
    } else {
      this.selectedTypes = this.selectedTypes.filter(t => t !== value);
    }

    this.applyFilters();
  }
}