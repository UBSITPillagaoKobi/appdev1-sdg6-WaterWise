import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProfileData {
  name: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editMode = false;

  profileImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" fill="%230d6efd"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="72" fill="white" font-family="Arial,Helvetica,sans-serif">U</text></svg>';

  profileData: ProfileData = {
    name: 'Unknown',
    description: 'A community member helping improve access to safe water.',
    address: '1600 Pennsylvania Avenue NW, Washington, DC 20500, USA',
    email: 'unknown@email.com',
    phone: '+63 912 345 6789',
    role: 'Community Member',
    image: ''
  };

  constructor() {
    this.loadProfile();
  }

  toggleEdit() {
    if (this.editMode) {
      this.saveProfile();
    }
    this.editMode = !this.editMode;
  }

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profileData.image = reader.result as string;
      this.saveProfile();
    };
    reader.readAsDataURL(file);
  }

  saveProfile() {
    localStorage.setItem('profileData', JSON.stringify(this.profileData));
  }

  loadProfile() {
    const saved = localStorage.getItem('profileData');
    if (saved) {
      try {
        this.profileData = JSON.parse(saved) as ProfileData;
      } catch {
        this.saveProfile();
      }
    } else {
      this.saveProfile();
    }
  }
}