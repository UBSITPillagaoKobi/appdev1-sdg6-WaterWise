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
    },
    {
  id: 4,
  name: 'Session Road Public Comfort Room',
  location: 'Lower Session Road (Near Post Office)',
  hasHandwashing: true,
  maintenanceSchedule: 'Every 1 Hour',
  status: 'Open'
},
{
  id: 5,
  name: 'Mines View Park Facility',
  location: 'Observation Deck Entrance',
  hasHandwashing: true,
  maintenanceSchedule: 'Every 3 Hours',
  status: 'Closed for Cleaning'
},
{
  id: 6,
  name: 'Botanical Garden Restroom',
  location: 'Near Japanese-Philippine Friendship Garden',
  hasHandwashing: true,
  maintenanceSchedule: 'Daily at 8:00 AM / 4:00 PM',
  status: 'Open'
},
{
  id: 7,
  name: 'Wright Park Handwashing Station',
  location: 'Near Horse Riding Area',
  hasHandwashing: true,
  maintenanceSchedule: 'Every 4 Hours',
  status: 'Open'
},
{
  id: 8,
  name: 'Baguio Public Market Block 4',
  location: 'Meat and Fish Section Basement',
  hasHandwashing: true,
  maintenanceSchedule: 'Every 30 Minutes',
  status: 'Open'
}
  ];

  handleViewDirections(facilityName: string) {
    alert(`Routing you toGoogle Maps for: ${facilityName} in Baguio City...`);
  }
}