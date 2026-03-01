import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  constructor(
    private authService: AuthService,
    private router : Router

  ){}

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
