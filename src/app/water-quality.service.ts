import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface QualityLocation {
  location: string;
  city: string;
  country: string;
  parameter: string;
  value: number;
  unit: string;
  lastUpdated: string;
}

interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
}

@Injectable({ providedIn: 'root' })
export class WaterQualityService {
  private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getLatestQuality(): Observable<QualityLocation[]> {
    const params = 'latitude=38.9&longitude=-77.0&current_weather=true&timezone=UTC';
    return this.http.get<OpenMeteoResponse>(`${this.apiUrl}?${params}`).pipe(
      map((response) => {
        const current = response.current_weather;
        const location = 'Washington DC';
        const city = 'Washington';
        const country = 'US';
        const lastUpdated = current.time;

        return [
          {
            location,
            city,
            country,
            parameter: 'Temperature',
            value: current.temperature,
            unit: '°C',
            lastUpdated,
          },
          {
            location,
            city,
            country,
            parameter: 'Wind Speed',
            value: current.windspeed,
            unit: 'km/h',
            lastUpdated,
          },
          {
            location,
            city,
            country,
            parameter: 'Wind Direction',
            value: current.winddirection,
            unit: '°',
            lastUpdated,
          },
        ];
      })
    );
  }
}
