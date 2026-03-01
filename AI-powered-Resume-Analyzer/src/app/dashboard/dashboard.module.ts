import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // ✅ ADD THIS


import { DashboardRoutingModule } from './dashboard-routing.module';

// ================= EMPLOYER =================
import { EmployerComponent } from './employer/employer.component';
import { PostJobComponent } from './employer/post-job/post-job.component';
import { CandidatesComponent } from './employer/candidates/candidates.component';
import { InterviewReviewComponent } from './employer/interview-review/interview-review.component';
import { AnalyticsComponent } from './employer/analytics/analytics.component';
import { DashboardHomeComponent as EmployerDashboardHomeComponent }
  from './dashboard-home/dashboard-home.component';

// ================= JOB SEEKER =================
import { JobSeekerComponent } from './layout/job-seeker/job-seeker.component';
import { SidebarComponent } from './layout/job-seeker/sidebar/sidebar.component';
import { HeaderComponent } from './layout/job-seeker/header/header.component';
import { UserMenuComponent } from './layout/job-seeker/user-menu/user-menu.component';
import { NotificationsComponent } from './layout/job-seeker/notifications/notifications.component';
import { BreadcrumbComponent } from './layout/job-seeker/breadcrumb/breadcrumb.component';
import { LoaderComponent } from './layout/job-seeker/loader/loader.component';

import { DashboardHomeComponent as JobSeekerDashboardHomeComponent }
  from './layout/job-seeker/pages/dashboard-home/dashboard-home.component';

import { JobMatchesComponent } from './layout/job-seeker/pages/job-matches/job-matches.component';
import { ApplicationsComponent } from './layout/job-seeker/pages/applications/applications.component';
import { InterviewsComponent } from './layout/job-seeker/pages/interviews/interviews.component';
import { AnalyticsComponent as JSAnalyticsComponent }
  from './layout/job-seeker/pages/analytics/analytics.component';
import { SettingsComponent } from './layout/job-seeker/pages/settings/settings.component';

@NgModule({
  declarations: [

    // Employer
    EmployerComponent,
    EmployerDashboardHomeComponent,
    PostJobComponent,
    CandidatesComponent,
    InterviewReviewComponent,
    AnalyticsComponent,

    // Job Seeker Layout
    JobSeekerComponent,
    SidebarComponent,
    HeaderComponent,
    UserMenuComponent,
    NotificationsComponent,
    BreadcrumbComponent,
    LoaderComponent,

    // Job Seeker Pages
    JobSeekerDashboardHomeComponent,
    JobMatchesComponent,
    ApplicationsComponent,
    InterviewsComponent,
    JSAnalyticsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
     FormsModule // ✅ ADD THIS
  ]
})
export class DashboardModule {}