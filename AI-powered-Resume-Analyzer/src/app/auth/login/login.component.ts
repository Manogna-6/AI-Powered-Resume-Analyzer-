
// Page where user logs in.

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   selectedRole: 'jobseeker' | 'employer' = 'jobseeker';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  selectRole(role: 'jobseeker' | 'employer') {
    this.selectedRole = role;

    if (role === 'employer') {
      this.registerForm.get('companyName')?.setValidators([Validators.required]);
    } else {
      this.registerForm.get('companyName')?.clearValidators();
    }

    this.registerForm.get('companyName')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
  
}
