import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

export interface PublicFacility {
  id: number;
  name: string;
  location: string;
  hasHandwashing: boolean;
  maintenanceSchedule: string;
  status: 'Open' | 'Closed for Cleaning';
}

@Component({
  selector: 'app-facility-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './facility-card.html',
  styleUrls: ['./facility-card.css']
})
export class FacilityCardComponent {
  @Input() facility!: PublicFacility;

  @Output() viewDirections = new EventEmitter<string>();

  notifyParent() {
    this.viewDirections.emit(this.facility.name);
  }
}