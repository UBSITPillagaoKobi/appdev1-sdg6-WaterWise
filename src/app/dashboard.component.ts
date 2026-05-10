import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { WaterQualityService } from './water-quality.service';
import { QualityLocation } from './models/water-quality.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profileImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%230d6efd"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="white" font-family="Arial,Helvetica,sans-serif">U</text></svg>';
  
  activeSection = signal('quality');
  showerTime = signal(10);
  showersPerWeek = signal(7);
  error = signal('');

  savingsResult = computed(() => {
    const currentUsage = this.showerTime() * this.showersPerWeek() * 2.1;
    const reducedUsage = 5 * this.showersPerWeek() * 2.1;
    const savings = Math.round(currentUsage - reducedUsage);
    return savings > 0 ? savings : 0;
  });

  latestData$!: Observable<QualityLocation[]>;

  constructor(
    private qualityService: WaterQualityService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.latestData$ = this.qualityService.getLatestQuality().pipe(
      catchError(err => {
        this.error.set('Unable to load quality data. Please try again later.');
        return of([]); 
      })
    );
  }

  goToProfile() {
    this.router.navigate(['/profile']); 
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login() {
    localStorage.setItem('authToken', 'authenticated');
    alert('Logged in! You can now access the protected routes.');
  }

  logout() {
    localStorage.removeItem('authToken');
    alert('Logged out!');
  }

  setActiveSection(section: string): void {
    this.activeSection.set(section);
  }

  updateShowerTime(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.showerTime.set(Number(val));
  }

  updateShowersPerWeek(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.showersPerWeek.set(Number(val));
  }

  hasHighPollution(data: QualityLocation[]): boolean {
    return data.some(item =>
      item.parameter.toLowerCase().includes('pollution') ||
      item.parameter.toLowerCase().includes('contamination') ||
      (item.parameter.toLowerCase().includes('ph') && (item.value < 6.5 || item.value > 8.5))
    );
  }

  hasLowQuality(data: QualityLocation[]): boolean {
    return data.some(item =>
      item.parameter.toLowerCase().includes('turbidity') && item.value > 5
    );
  }
}