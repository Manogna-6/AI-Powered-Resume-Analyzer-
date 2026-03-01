import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  currentPage = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url.split('/').pop();
      this.currentPage = url || '';
    });
  }
}
