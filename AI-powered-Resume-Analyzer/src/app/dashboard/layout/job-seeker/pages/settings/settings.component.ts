import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  implements OnInit{
 profileForm!: FormGroup;

  user = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    location: 'Bangalore, India',
    role: 'Frontend Developer',
    passwordUpdated: '2 months ago',
    notifications: {
      jobMatches: true,
      interviewReminders: true,
      statusUpdates: true
    }
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: [this.user.fullName],
      email: [this.user.email],
      phone: [this.user.phone],
      location: [this.user.location],
      jobMatches: [this.user.notifications.jobMatches],
      interviewReminders: [this.user.notifications.interviewReminders],
      statusUpdates: [this.user.notifications.statusUpdates]
    });
  }

  // 🔥 Dynamic Initials
  get initials(): string {
    const names = this.profileForm.get('fullName')?.value.split(' ');
    return names?.map((n: string) => n[0]).join('').toUpperCase();
  }

  saveChanges() {
    const updatedData = this.profileForm.value;

    console.log("Saving:", updatedData);

    // Example API call
    // this.http.put('/api/user/update', updatedData)
    //   .subscribe(res => console.log(res));
  }

  changePassword() {
    console.log("Redirect to change password");
  }

  toggle2FA() {
    console.log("Enable 2FA");
  }
}

