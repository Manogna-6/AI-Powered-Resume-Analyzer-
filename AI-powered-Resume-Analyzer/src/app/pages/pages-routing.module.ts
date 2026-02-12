// pages-routing.module.ts
// Handles public pages like Home, About, Jobs, Contact

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | NextHire'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | NextHire'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | NextHire'
  },
  {
    path: 'jobs',
    component: JobsComponent,
    title: 'Jobs | NextHire'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';


// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { JobsComponent } from './jobs/jobs.component';
// import { NotFoundComponent } from './not-found/not-found.component';



// const routes: Routes = [
//   {path: '', component:HomeComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'contact', component: ContactComponent},
//   {path: 'jobs', component: JobsComponent},
//   {path: '**', component: NotFoundComponent},
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class PagesRoutingModule { }
