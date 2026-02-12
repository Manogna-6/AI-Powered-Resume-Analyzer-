//  Shows available jobs.


import { Component } from '@angular/core';
import { Job } from 'src/app/models/job.model';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
jobs: Job[] = [
    {
      id: 1,
      companyInitials: 'FD',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      posted: '2 days ago',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      match: 95
    },
    {
      id: 2,
      companyInitials: 'DS',
      title: 'Data Science',
      company: 'DataDriven Co.',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$140k - $190k',
      posted: '5 days ago',
      skills: ['Python', 'Machine Learning', 'SQL'],
      match: 78
    },
    {
      id: 3,
      companyInitials: 'BD',
      title: 'Backend Developer',
      company: 'Developer Co.',
      location: 'France, MA',
      type: 'Part-time',
      salary: '$123k - $160k',
      posted: '2 days ago',
      skills: ['Python', 'Django', 'Nodejs'],
      match: 78
    },
     {
      id: 4,
      companyInitials: 'WD',
      title: 'Web Development',
      company: 'Developer Co.',
      location: 'Pairs, MA',
      type: 'Full-time',
      salary: '$1200k - $1500k',
      posted: '1 days ago',
      skills: ['Angular', 'ReactJs', 'Native ReactJs'],
      match: 40
    },
     {
      id: 5,
      companyInitials: 'FD',
      title: 'Full-Stack Development',
      company: 'NexMind Co.',
      location: 'India',
      type: 'Full-time',
      salary: '$2000k - $5000k',
      posted: '1 days ago',
      skills: ['Angular', 'ReactJs', ' NodeJs'],
      match: 90
    },
    {
      id: 6,
      companyInitials: 'PD',
      title: 'Python Developer',
      company: 'SmartIdeas Co.',
      location: 'India',
      type: 'Part-time',
      salary: '$500k - $1000k',
      posted: '5 days ago',
      skills: ['Python', 'DJango', ' Flask'],
      match: 60
    },
    {
      id: 7,
      companyInitials: 'DO',
      title: 'DevOps',
      company: 'Dev Co.',
      location: 'India',
      type: 'Full-time',
      salary: '$1500k - $2000k',
      posted: '3 days ago',
      skills: ['Git', 'Linux', ' AWS'],
      match: 80
    },



  ];
}
