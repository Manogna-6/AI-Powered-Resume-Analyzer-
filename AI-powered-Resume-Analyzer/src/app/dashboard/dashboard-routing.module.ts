import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployerComponent } from './employer/employer.component';
import { AnalyticsComponent } from './employer/analytics/analytics.component';
import { CandidatesComponent } from './employer/candidates/candidates.component';
import { InterviewReviewComponent } from './employer/interview-review/interview-review.component';
import { PostJobComponent } from './employer/post-job/post-job.component';

import { JobSeekerComponent } from './layout/job-seeker/job-seeker.component';
import { BreadcrumbComponent } from './layout/job-seeker/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './layout/job-seeker/header/header.component';
import { LoaderComponent } from './layout/job-seeker/loader/loader.component';
import { NotificationsComponent } from './layout/job-seeker/notifications/notifications.component';
import { SidebarComponent } from './layout/job-seeker/sidebar/sidebar.component';
import { UserMenuComponent } from './layout/job-seeker/user-menu/user-menu.component';

// import { DashboardHomeComponent } from './layout/job-seeker/pages/dashboard-home/dashboard-home.component';
import { JobMatchesComponent } from './layout/job-seeker/pages/job-matches/job-matches.component';
import { ApplicationsComponent } from './layout/job-seeker/pages/applications/applications.component';
import { InterviewsComponent } from './layout/job-seeker/pages/interviews/interviews.component';
import { AnalyticsComponent as JSAnalyticsComponent } from './layout/job-seeker/pages/analytics/analytics.component';
import { SettingsComponent } from './layout/job-seeker/pages/settings/settings.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
// Employer Dashboard
import { DashboardHomeComponent as EmployerDashboardHomeComponent } 
  from './dashboard-home/dashboard-home.component';

// Job Seeker Dashboard
import { DashboardHomeComponent as JobSeekerDashboardHomeComponent } 
  from './layout/job-seeker/pages/dashboard-home/dashboard-home.component';
// import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: 'employer',
    component: EmployerComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'employer' },
    children: [
      { path: 'dashboard-home', component: EmployerDashboardHomeComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'candidates', component: CandidatesComponent },
      { path: 'interview-review', component: InterviewReviewComponent },
      { path: 'post-job', component: PostJobComponent },
      { path: '', redirectTo: 'analytics', pathMatch: 'full' }
    ]
  },
  {
    path: 'job-seeker',
    component: JobSeekerComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'job-seeker' },
    children: [
      { path: 'dashboard-home', component: JobSeekerDashboardHomeComponent },
      { path: 'job-matches', component: JobMatchesComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'interviews', component: InterviewsComponent },
      { path: 'analytics', component: JSAnalyticsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' }
    ]
  }
];

  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}