import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WaterQualityService, QualityLocation } from './water-quality.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="dashboard-navbar">
      <div class="navbar-brand">WaterWise</div>

      <ul class="nav-links">
        <li class="nav-item">
          <a class="nav-link active" href="#">Sanitation Access</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Conservation Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quality Monitor</a>
        </li>
      </ul>

      <div class="search-group">
        <form class="search-form" role="search">
          <input class="search-input" type="search" placeholder="Search" aria-label="Search" />
          <button class="search-button" type="submit">Search</button>
        </form>

        <button type="button" class="profile-avatar" aria-label="Profile">
          <img [src]="profileImage" alt="Profile avatar" />
        </button>
      </div>
    </nav>

    <section class="quality-panel">
      <div class="quality-panel-header">
        <div>
          <h3>Live Environment Snapshot</h3>
          <p>Data from the Open-Meteo public API for quick environment context.</p>
        </div>
        <span class="quality-tag">Open-Meteo</span>
      </div>

      <div *ngIf="loading" class="status-message">Loading latest quality data...</div>
      <div *ngIf="error" class="status-message error">{{ error }}</div>

      <div class="quality-grid" *ngIf="!loading && !error && latestData.length > 0">
        <article *ngFor="let item of latestData" class="quality-card">
          <div class="quality-card-top">
            <span class="quality-location">{{ item.location }}</span>
            <span class="quality-country">{{ item.country }}</span>
          </div>
          <p class="quality-city">{{ item.city }}</p>
          <div class="quality-value-row">
            <span class="quality-value">{{ item.value }}</span>
            <span class="quality-unit">{{ item.unit }}</span>
          </div>
          <div class="quality-parameter">{{ item.parameter }}</div>
          <div class="quality-updated">Updated: {{ item.lastUpdated | date:'short' }}</div>
        </article>
      </div>

      <div *ngIf="!loading && !error && latestData.length === 0" class="status-message">
        No quality readings available right now.
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
      }

      .dashboard-navbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 20px;
        background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);
        color: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(13, 110, 253, 0.18);
        margin-bottom: 22px;
      }

      .navbar-brand {
        font-weight: 700;
        letter-spacing: 0.05em;
        font-size: 1.15rem;
      }

      .nav-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
        flex: 1 1 auto;
        justify-content: center;
      }

      .nav-item {
        display: inline-block;
      }

      .nav-link {
        display: inline-flex;
        align-items: center;
        padding: 10px 16px;
        color: rgba(255, 255, 255, 0.92);
        text-decoration: none;
        border-radius: 999px;
        transition: background-color 200ms ease, color 200ms ease, transform 200ms ease;
        font-weight: 500;
      }

      .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.18);
        color: #ffffff;
        transform: translateY(-1px);
      }

      .nav-link.active {
        background-color: rgba(255, 255, 255, 0.26);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
      }

      .search-group {
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .search-form {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .profile-avatar {
        width: 52px;
        height: 52px;
        min-width: 52px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 150ms ease, box-shadow 150ms ease, background-color 150ms ease;
      }

      .profile-avatar:hover {
        background: rgba(255, 255, 255, 0.28);
        transform: translateY(-2px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
      }

      .profile-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      .search-input {
        min-width: 180px;
        padding: 10px 14px;
        border: none;
        border-radius: 999px;
        outline: none;
        transition: box-shadow 200ms ease;
      }

      .search-input:focus {
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.32);
      }

      .search-button {
        padding: 10px 18px;
        border: none;
        border-radius: 999px;
        background: #ffffff;
        color: #0d6efd;
        font-weight: 600;
        cursor: pointer;
        transition: transform 150ms ease, background-color 150ms ease;
      }

      .search-button:hover {
        background: rgba(255, 255, 255, 0.95);
        transform: translateY(-1px);
      }

      .quality-panel {
        background: #f8fafd;
        padding: 22px;
        border-radius: 16px;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
      }

      .quality-panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(13, 110, 253, 0.16);
      }

      .quality-panel-header h3 {
        margin: 0;
      }

      .quality-panel-header p {
        margin: 4px 0 0;
        color: #4a5768;
      }

      .quality-tag {
        display: inline-flex;
        align-items: center;
        padding: 6px 14px;
        border-radius: 999px;
        background: rgba(13, 110, 253, 0.12);
        color: #0d6efd;
        font-size: 0.9rem;
        font-weight: 700;
      }

      .quality-grid {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        margin-top: 18px;
      }

      .quality-card {
        background: #ffffff;
        padding: 18px;
        border-radius: 16px;
        border: 1px solid rgba(13, 110, 253, 0.08);
        box-shadow: 0 15px 30px rgba(15, 23, 42, 0.06);
      }

      .quality-card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
      }

      .quality-location {
        font-weight: 700;
        color: #0d6efd;
      }

      .quality-country {
        background: rgba(13, 110, 253, 0.08);
        color: #0d6efd;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.85rem;
      }

      .quality-city {
        margin: 0 0 10px;
        color: #6c757d;
      }

      .quality-value-row {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .quality-value {
        font-size: 2rem;
        font-weight: 700;
        color: #0d6efd;
      }

      .quality-unit {
        color: #6c757d;
        font-weight: 700;
      }

      .quality-parameter {
        margin: 10px 0 0;
        color: #4a5768;
      }

      .quality-updated {
        margin-top: 12px;
        font-size: 0.88rem;
        color: #6c757d;
      }

      .status-message {
        color: #334155;
        margin-top: 16px;
      }

      .status-message.error {
        color: #b02a37;
      }

      @media (max-width: 760px) {
        .dashboard-navbar {
          justify-content: center;
        }

        .nav-links {
          justify-content: center;
        }

        .search-form {
          width: 100%;
          justify-content: center;
        }

        .search-input {
          width: 100%;
          max-width: 240px;
        }
      }
    `
  ]
})
export class DashboardComponent implements OnInit {
  profileImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%230d6efd"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="white" font-family="Arial,Helvetica,sans-serif">U</text></svg>';
  latestData: QualityLocation[] = [];
  loading = true;
  error = '';

  constructor(private qualityService: WaterQualityService) {}

  ngOnInit(): void {
    this.qualityService.getLatestQuality().subscribe({
      next: (data) => {
        this.latestData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Unable to load quality data. Please try again later.';
        this.loading = false;
      },
    });
  }
}
