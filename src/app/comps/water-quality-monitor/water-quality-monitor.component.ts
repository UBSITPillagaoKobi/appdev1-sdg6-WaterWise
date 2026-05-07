import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-water-quality-monitor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './water-quality-monitor.component.html',
  styleUrls: ['./water-quality-monitor.component.css']
})

export class WaterQualityMonitorComponent {
  
  waterSources = [
    { name: 'Source 1', phLevel: 7.2, status: 'GoodYeah', safe: true },
    { name: 'Source 2', phLevel: 6.8, status: 'Fair', safe: true },
    { name: 'Source 3', phLevel: 5.5, status: 'Poor', safe: false },
    { name: 'Source 4', phLevel: 7.4, status: 'Good', safe: true }
  ];

  currentFilter = 'All';

  setFilter(status: string) {
    this.currentFilter = status;
  }

  get displayedSources() {
    if (this.currentFilter === 'All') {
      return this.waterSources;
    }
    return this.waterSources.filter(source => source.status === this.currentFilter);
  }
}
