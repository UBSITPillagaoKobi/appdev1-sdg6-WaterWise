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
  location: 'South Drive Monitoring Station',
  country: 'PH',
  city: 'Baguio City',
  value: response.current.temperature_2m,
  unit: '°C',
  parameter: 'Ambient Temperature',
  lastUpdated: new Date().toISOString()
},
{
  location: 'Santo Tomas Reservoir Intake',
  country: 'PH',
  city: 'Baguio City',
  value: response.current.relative_humidity_2m,
  unit: '%',
  parameter: 'Atmospheric Humidity',
  lastUpdated: new Date().toISOString()
},
{
  location: 'Burnham Lake Drainage Outlet',
  country: 'PH',
  city: 'Baguio City',
  value: response.current.precipitation,
  unit: 'mm',
  parameter: 'Surface Runoff (Precipitation)',
  lastUpdated: new Date().toISOString()
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