import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WaterQualityService } from './water-quality.service';
import { QualityLocation } from './models/water-quality.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profileImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%230d6efd"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="white" font-family="Arial,Helvetica,sans-serif">U</text></svg>';
  latestData: QualityLocation[] = [];
  loading = true;
  error = '';
  activeSection = 'quality';
  showerTime = 10;
  showersPerWeek = 7;
  savingsResult: number | null = null;

  constructor(private qualityService: WaterQualityService) {}

  ngOnInit(): void {
    this.qualityService.getLatestQuality().subscribe({
      next: (data: QualityLocation[]) => {
        this.latestData = data;
        this.loading = false;
      },
      error: (err: Error) => {
        console.error(err);
        this.error = 'Unable to load quality data. Please try again later.';
        this.loading = false;
      },
    });
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  calculateSavings(): void {
    const currentUsage = this.showerTime * this.showersPerWeek * 2.1;
    const reducedUsage = 5 * this.showersPerWeek * 2.1;
    this.savingsResult = Math.round(currentUsage - reducedUsage);
  }

  hasHighPollution(): boolean {
    return this.latestData.some(item =>
      item.parameter.toLowerCase().includes('pollution') ||
      item.parameter.toLowerCase().includes('contamination') ||
      (item.parameter.toLowerCase().includes('ph') && (item.value < 6.5 || item.value > 8.5))
    );
  }

  hasLowQuality(): boolean {
    return this.latestData.some(item =>
      item.parameter.toLowerCase().includes('turbidity') && item.value > 5
    );
  }
}
