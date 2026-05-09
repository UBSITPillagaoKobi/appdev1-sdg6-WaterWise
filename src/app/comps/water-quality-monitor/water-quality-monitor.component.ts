import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { WaterQualityService } from '../../water-quality.service';
import { QualityLocation } from '../../models/water-quality.model';

@Component({
  selector: 'app-water-quality-monitor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './water-quality-monitor.component.html',
  styleUrls: ['./water-quality-monitor.component.css']
})
export class WaterQualityMonitorComponent implements OnInit {
  
  waterSources = [
    { name: 'Burnham Park Source', phLevel: 7.2, status: 'Good', safe: true },
    { name: 'Camp John Hay Stream', phLevel: 6.8, status: 'Fair', safe: true },
    { name: 'Balili River Segment', phLevel: 5.5, status: 'Poor', safe: false },
    { name: 'Asin Road Spring', phLevel: 7.4, status: 'Good', safe: true }
  ];

  currentFilter = 'All';

  latestData$!: Observable<QualityLocation[]>;
  error = signal(''); 

  private qualityService = inject(WaterQualityService);

  ngOnInit(): void {
    this.latestData$ = this.qualityService.getLatestQuality().pipe(
      catchError(err => {
        this.error.set('Unable to load Open-Meteo API data. Please try again later.');
        return of([]); 
      })
    );
  }

  setFilter(status: string) {
    this.currentFilter = status;
  }

  get displayedSources() {
    if (this.currentFilter === 'All') {
      return this.waterSources;
    }
    return this.waterSources.filter(source => source.status === this.currentFilter);
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