<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
=======
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { WaterQualityService, QualityLocation } from './water-quality.service';
>>>>>>> 89d88bddd60c8f96c6c7569edb76d849073e27b2
=======
import { FormsModule } from '@angular/forms';
import { WaterQualityService } from './water-quality.service';
import { QualityLocation } from './models/water-quality.model';
>>>>>>> fbdf207081b498eecd9f937fd40d4e58fc23728d
=======
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WaterQualityService, QualityLocation } from './water-quality.service';
>>>>>>> 789babfb590d60c060e09cdfa5a3bb5929eef357

@Component({
  selector: 'app-dashboard',
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [RouterLink],
  template: `
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard. This component demonstrates routing.</p>
      
      <div class="mb-3">
        <button class="btn btn-success me-2" (click)="login()">Login to Access Features</button>
        <button class="btn btn-danger" (click)="logout()">Logout</button>
        <p class="mt-2">Status: {{ isAuthenticated ? 'Authenticated' : 'Not Authenticated' }}</p>
=======
  imports: [CommonModule],
=======
  imports: [CommonModule, FormsModule],
>>>>>>> fbdf207081b498eecd9f937fd40d4e58fc23728d
  template: `
    <nav class="dashboard-navbar">
      <div class="navbar-brand">WaterWise</div>

      <ul class="nav-links">
        <li class="nav-item">
          <button class="nav-link" [class.active]="activeSection === 'sanitation'" (click)="setActiveSection('sanitation')">Sanitation Access</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" [class.active]="activeSection === 'conservation'" (click)="setActiveSection('conservation')">Conservation Guide</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" [class.active]="activeSection === 'quality'" (click)="setActiveSection('quality')">Quality Monitor</button>
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

    <section *ngIf="activeSection === 'sanitation'" class="content-section">
      <div class="panel">
        <h3>Sanitation Access</h3>
        <p>Information about sanitation access and facilities in your area.</p>
        <div class="sanitation-stats">
          <div class="stat-card">
            <h4>Access Rate</h4>
            <span class="stat-value">85%</span>
            <p>Population with access to improved sanitation</p>
          </div>
          <div class="stat-card">
            <h4>Facilities</h4>
            <span class="stat-value">1,250</span>
            <p>Public sanitation facilities available</p>
          </div>
          <div class="stat-card">
            <h4>Coverage</h4>
            <span class="stat-value">92%</span>
            <p>Area covered by sanitation services</p>
          </div>
        </div>
      </div>
    </section>

    <section *ngIf="activeSection === 'conservation'" class="content-section">
      <div class="panel">
        <h3>Water Conservation Guide</h3>
        <p>Practical tips and strategies to conserve water in your daily life.</p>
        
        <div class="conservation-tips">
          <article class="tip-card">
            <h4>🚿 Shower Smarter</h4>
            <p>Take shorter showers (5-10 minutes) and install low-flow showerheads to reduce water usage by up to 50%.</p>
          </article>
          
          <article class="tip-card">
            <h4>🍽️ Kitchen Efficiency</h4>
            <p>Run full loads in dishwashers and washing machines. Fix leaky faucets immediately - they can waste 3,000 gallons per year.</p>
          </article>
          
          <article class="tip-card">
            <h4>🌱 Garden Wisely</h4>
            <p>Use drought-resistant plants, mulch to retain soil moisture, and water lawns/gardens during cooler parts of the day.</p>
          </article>
          
          <article class="tip-card">
            <h4>🚰 Faucet Habits</h4>
            <p>Turn off faucets while brushing teeth or soaping up. Collect rainwater for outdoor use when possible.</p>
          </article>
          
          <article class="tip-card">
            <h4>🔧 Home Improvements</h4>
            <p>Install dual-flush toilets and water-efficient appliances. Check for leaks regularly using your water meter.</p>
          </article>
          
          <article class="tip-card">
            <h4>🏡 Landscape Design</h4>
            <p>Replace grass with native plants, use permeable paving, and create rain gardens to manage stormwater naturally.</p>
          </article>
=======
  imports: [CommonModule],
  template: `
    <section class="dashboard-intro">
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard. This component demonstrates routing.</p>
      
      <div class="mb-3">
        <button class="btn btn-success me-2" (click)="login()">Click here to access features</button>
        <button class="btn btn-danger" (click)="logout()">Click here to lock the features</button>
        <p class="mt-2">Status: {{ isAuthenticated ? 'Authenticated' : 'Not Authenticated' }}</p>
      </div>
    </section>

    <section class="quality-panel">
      <div class="quality-panel-header">
        <div>
          <h3>Live Environment Snapshot</h3>
          <p>Data from the Open-Meteo public API for quick environment context.</p>
>>>>>>> 789babfb590d60c060e09cdfa5a3bb5929eef357
        </div>
        
        <div class="conservation-calculator">
          <h4>💧 Water Savings Calculator</h4>
          <p>Estimate your potential water savings:</p>
          <div class="calculator-inputs">
            <label>Daily shower time (minutes): <input type="number" [(ngModel)]="showerTime" min="1" max="30" /> </label>
            <label>Showers per week: <input type="number" [(ngModel)]="showersPerWeek" min="1" max="21" /> </label>
            <button (click)="calculateSavings()" class="calc-button">Calculate Savings</button>
          </div>
          <div *ngIf="savingsResult" class="savings-result">
            <p>By reducing shower time to 5 minutes, you could save approximately <strong>{{ savingsResult }} gallons per week</strong>!</p>
          </div>
        </div>
      </div>
    </section>

<<<<<<< HEAD
      <div *ngIf="!loading && !error && latestData.length === 0" class="status-message">
        No quality readings available right now.
>>>>>>> 89d88bddd60c8f96c6c7569edb76d849073e27b2
=======
    <section *ngIf="activeSection === 'quality'" class="content-section">
      <div class="quality-panel">
        <div class="quality-panel-header">
          <div>
            <h3>Live Environment Snapshot</h3>
            <p>Data from the Open-Meteo public API for quick environment context.</p>
          </div>
          <span class="quality-tag">Open-Meteo</span>
        </div>

        <div *ngIf="loading" class="status-message">⏳ Loading latest quality data...</div>
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
        
        <div class="quality-alerts" *ngIf="!loading && !error">
          <h4>⚠️ Quality Alerts</h4>
          <div class="alert-card" *ngIf="hasHighPollution()">
            <span class="alert-icon">🚨</span>
            <div>
              <h5>High Pollution Levels Detected</h5>
              <p>Water quality parameters exceed safe limits in some areas. Consider using filtration systems.</p>
            </div>
          </div>
          <div class="alert-card" *ngIf="hasLowQuality()">
            <span class="alert-icon">⚡</span>
            <div>
              <h5>Seasonal Quality Changes</h5>
              <p>Monitor water quality during rainy seasons as runoff may affect local sources.</p>
            </div>
          </div>
        </div>
>>>>>>> fbdf207081b498eecd9f937fd40d4e58fc23728d
      </div>
    </section>
<<<<<<< HEAD

    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">

          <a class="nav-link active" routerLink="/sanitation">Sanitation Access Tracker
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/water-conservation">Water Conservation Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/water-quality">Water Quality Monitor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
=======
>>>>>>> 789babfb590d60c060e09cdfa5a3bb5929eef357
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
        border-radius: 999px;
        transition: background-color 200ms ease, color 200ms ease, transform 200ms ease;
        font-weight: 500;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
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

      .content-section {
        margin-top: 24px;
      }

      .panel {
        background: #f8fafd;
        padding: 22px;
        border-radius: 16px;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
      }

      .panel h3 {
        margin: 0 0 8px 0;
        color: #0d6efd;
      }

      .panel > p {
        margin: 0 0 20px 0;
        color: #4a5768;
      }

      .sanitation-stats {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin-top: 20px;
      }

      .stat-card {
        background: #ffffff;
        padding: 18px;
        border-radius: 12px;
        border: 1px solid rgba(13, 110, 253, 0.08);
        text-align: center;
      }

      .stat-card h4 {
        margin: 0 0 8px 0;
        color: #0d6efd;
        font-size: 1rem;
      }

      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: #0d6efd;
        display: block;
        margin-bottom: 8px;
      }

      .stat-card p {
        margin: 0;
        color: #6c757d;
        font-size: 0.9rem;
      }

      .conservation-tips {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin-bottom: 24px;
      }

      .tip-card {
        background: #ffffff;
        padding: 18px;
        border-radius: 12px;
        border: 1px solid rgba(13, 110, 253, 0.08);
        box-shadow: 0 8px 16px rgba(15, 23, 42, 0.04);
      }

      .tip-card h4 {
        margin: 0 0 8px 0;
        color: #0d6efd;
      }

      .tip-card p {
        margin: 0;
        color: #4a5768;
        line-height: 1.5;
      }

      .conservation-calculator {
        background: #ffffff;
        padding: 20px;
        border-radius: 12px;
        border: 1px solid rgba(13, 110, 253, 0.08);
      }

      .conservation-calculator h4 {
        margin: 0 0 8px 0;
        color: #0d6efd;
      }

      .calculator-inputs {
        display: flex;
        gap: 16px;
        align-items: center;
        margin: 16px 0;
        flex-wrap: wrap;
      }

      .calculator-inputs label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 0.9rem;
        color: #4a5768;
      }

      .calculator-inputs input {
        padding: 8px 12px;
        border: 1px solid #dee2e6;
        border-radius: 6px;
        width: 120px;
      }

      .calc-button {
        padding: 10px 16px;
        background: #0d6efd;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 200ms ease;
      }

      .calc-button:hover {
        background: #0b5ed7;
      }

      .savings-result {
        margin-top: 16px;
        padding: 12px;
        background: #e7f3ff;
        border-radius: 8px;
        border-left: 4px solid #0d6efd;
      }

      .quality-alerts {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid rgba(13, 110, 253, 0.16);
      }

      .quality-alerts h4 {
        margin: 0 0 16px 0;
        color: #dc3545;
      }

      .alert-card {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        background: #fff5f5;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #fed7d7;
        margin-bottom: 12px;
      }

      .alert-icon {
        font-size: 1.5rem;
      }

      .alert-card h5 {
        margin: 0 0 4px 0;
        color: #dc3545;
      }

      .alert-card p {
        margin: 0;
        color: #4a5768;
        font-size: 0.9rem;
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
<<<<<<< HEAD
<<<<<<< HEAD
export class DashboardComponent {
=======
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

>>>>>>> 789babfb590d60c060e09cdfa5a3bb5929eef357
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
<<<<<<< HEAD
=======
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
>>>>>>> 89d88bddd60c8f96c6c7569edb76d849073e27b2
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
=======
>>>>>>> 789babfb590d60c060e09cdfa5a3bb5929eef357
  }
}
