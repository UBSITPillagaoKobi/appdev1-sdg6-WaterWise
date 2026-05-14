export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation: number;
  };
}

export interface QualityLocation {
  location: string;
  country: string;
  city: string;
  value: number;
  unit: string;
  parameter: string;
  lastUpdated: string;
}

export interface WaterReport {
  location: string;
  issue: string;
}