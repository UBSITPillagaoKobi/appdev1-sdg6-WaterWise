import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

   profileImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%230d6efd"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="white" font-family="Arial,Helvetica,sans-serif">U</text></svg>';

}
