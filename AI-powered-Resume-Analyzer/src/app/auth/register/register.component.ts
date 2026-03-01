import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  selectedRole: 'jobseeker' | 'employer' = 'jobseeker';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  selectRole(role: 'jobseeker' | 'employer') {
    this.selectedRole = role;

    const companyControl = this.registerForm.get('companyName');

    if (role === 'employer') {
      companyControl?.setValidators([Validators.required]);
    } else {
      companyControl?.clearValidators();
    }

    companyControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // TODO: Call register API
    }
      this.router.navigate(['/auth/login']);
  }
}