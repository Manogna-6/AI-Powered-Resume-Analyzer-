// Main routing configuration for the entire application

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // ================= HOME / PAGES =================
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then(m => m.PagesModule)
  },

  // ================= AUTH (Login / Register) =================
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },

  // ================= DASHBOARD =================
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  // ================= WILDCARD =================
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',  // scroll to top on navigation
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
