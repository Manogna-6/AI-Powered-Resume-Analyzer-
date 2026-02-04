import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ResumeUploadComponent } from './job-seeker/resume-upload/resume-upload.component';
import { ResumeAnalysisComponent } from './job-seeker/resume-analysis/resume-analysis.component';
import { JobMatchesComponent } from './job-seeker/job-matches/job-matches.component';
import { VideoInterviewComponent } from './job-seeker/video-interview/video-interview.component';
import { ProfileComponent } from './job-seeker/profile/profile.component';
import { PostJobComponent } from './employer/post-job/post-job.component';
import { CandidatesComponent } from './employer/candidates/candidates.component';
import { InterviewReviewComponent } from './employer/interview-review/interview-review.component';
import { AnalyticsComponent } from './employer/analytics/analytics.component';


@NgModule({
  declarations: [
    ResumeUploadComponent,
    ResumeAnalysisComponent,
    JobMatchesComponent,
    VideoInterviewComponent,
    ProfileComponent,
    PostJobComponent,
    CandidatesComponent,
    InterviewReviewComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
