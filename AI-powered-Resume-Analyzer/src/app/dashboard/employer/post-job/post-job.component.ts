// Employer posts a job.

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {


  jobForm!: FormGroup;
  isSubmitting = false;

  employmentTypes = ['Full-time', 'Part-time', 'Remote', 'Contract'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      experience: ['', Validators.required],
      salary: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      skills: this.fb.array([])
    });
  }

  // 🔥 Skills as FormArray
  get skills(): FormArray {
    return this.jobForm.get('skills') as FormArray;
  }

  addSkill(skillInput: HTMLInputElement) {
    const value = skillInput.value.trim();

    if (value) {
      this.skills.push(this.fb.control(value));
      skillInput.value = '';
    }
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submitJob() {

    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const jobData = this.jobForm.value;

    console.log('Job Data:', jobData);

    // 🔥 Replace with real API
    setTimeout(() => {
      alert('Job Published Successfully!');
      this.jobForm.reset();
      this.skills.clear();
      this.isSubmitting = false;
    }, 1000);

  }
}