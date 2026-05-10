import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="dashboard-navbar">
      <div class="navbar-brand">WaterWise</div>

      <ul class="nav-links">
        <li class="nav-item">
          <a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/sanitation" routerLinkActive="active">Sanitation Access</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/water-conservation" routerLinkActive="active">Conservation Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/water-quality" routerLinkActive="active">Quality Monitor</a>
        </li>
      </ul>

      <div class="search-group">
        <form class="search-form" role="search">
          <input class="search-input" type="search" placeholder="Search" aria-label="Search" />
          <button class="search-button" type="submit">Search</button>
        </form>

        <button type="button" class="profile-avatar" aria-label="Profile" (click)="goToProfile()">
          <img [src]="profileImage" alt="Profile avatar" />
        </button>

        <button *ngIf="!isAuthenticated" (click)="login()" class="auth-button login-button">
          Login
        </button>
        <button *ngIf="isAuthenticated" (click)="logout()" class="auth-button logout-button">
          Logout
        </button>
      </div>
    </nav>
  `,
  styles: [
    `
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

      .profile-avatar {
        width: 52px;
        height: 52px;
        min-width: 52px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
      }

      .auth-button {
        padding: 8px 16px;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 150ms ease;
      }

      .login-button {
        background: #28a745;
      }

      .login-button:hover {
        background: #218838;
      }

      .logout-button {
        background: #dc3545;
      }

      .logout-button:hover {
        background: #c82333;
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
    `
  ]
})
export class HeaderComponent {
  profileImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%230d6efd"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="white" font-family="Arial,Helvetica,sans-serif">U</text></svg>';

  constructor(private router: Router) {}

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  login() {
    localStorage.setItem('authToken', 'authenticated');
    alert('Logged in! You can now access the protected routes.');
  }

  logout() {
    localStorage.removeItem('authToken');
    alert('Logged out!');
    this.router.navigate(['/dashboard']);
  }
}
