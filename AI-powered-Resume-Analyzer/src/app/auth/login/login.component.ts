import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

    // ✅ Form with role added
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]   // ✅ IMPORTANT
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {

      const role = this.loginForm.value.role;

      // ✅ Save dummy token (for AuthGuard)
      this.authService.login('dummy-token');

      // ✅ Save role properly (for RoleGuard)
      this.authService.setRole(role);

      // ✅ Navigate based on role
      if (role === 'job-seeker') {
        this.router.navigate(['/dashboard/job-seeker']);
      } else if (role === 'employer') {
        this.router.navigate(['/dashboard/employer']);
      }
    }
  }
}