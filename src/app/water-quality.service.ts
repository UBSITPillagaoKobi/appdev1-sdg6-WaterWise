import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { WeatherApiResponse, QualityLocation, WaterReport } from './models/water-quality.model';

@Injectable({ providedIn: 'root' })
export class WaterQualityService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=7.0&longitude=125.0&current=temperature_2m,relative_humidity_2m,precipitation';

  constructor(private http: HttpClient) {}

  getLatestQuality(): Observable<QualityLocation[]> {
    return this.http.get<WeatherApiResponse>(this.apiUrl).pipe(
      map(response => [
        {
          location: 'Station A', country: 'PH', city: 'Kidapawan',
          value: response.current.temperature_2m, unit: '°C',
          parameter: 'Temperature', lastUpdated: new Date().toISOString()
        },
        {
          location: 'Station B', country: 'PH', city: 'Kidapawan',
          value: response.current.relative_humidity_2m, unit: '%',
          parameter: 'Humidity', lastUpdated: new Date().toISOString()
        },
        {
          location: 'Station C', country: 'PH', city: 'Kidapawan',
          value: response.current.precipitation, unit: 'mm',
          parameter: 'Precipitation', lastUpdated: new Date().toISOString()
        }
      ]),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch water quality data.'));
      })
    );
  }

  submitWaterReport(report: WaterReport): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', report);
  }
}