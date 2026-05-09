import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityCardComponent, PublicFacility } from '../facility-card/facility-card';

@Component({
  selector: 'app-sanitation-access-tracker',
  standalone: true,
  imports: [CommonModule, FacilityCardComponent], 
  templateUrl: './sanitation-access-tracker.component.html',
  styleUrls: ['./sanitation-access-tracker.component.css']
})
export class SanitationAccessTrackerComponent {
  
  facilities: PublicFacility[] = [
    {
      id: 1,
      name: 'Burnham Park Public Restroom',
      location: 'Near Melvin Jones Grandstand',
      hasHandwashing: true,
      maintenanceSchedule: 'Every 2 Hours',
      status: 'Open'
    },
    {
      id: 2,
      name: 'Session Road Comfort Room',
      location: 'Porta Vaga Mall Basement',
      hasHandwashing: true,
      maintenanceSchedule: 'Hourly',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Mines View Park Restrooms',
      location: 'Entrance Gate Area',
      hasHandwashing: true,
      maintenanceSchedule: 'Daily at 12:00 PM',
      status: 'Closed for Cleaning'
    }
  ];

  handleViewDirections(facilityName: string) {
    alert(`Routing you to Apple Maps / Google Maps for: ${facilityName} in Baguio City...`);
  }
}