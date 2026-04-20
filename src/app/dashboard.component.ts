import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard. This component demonstrates routing.</p>
      
      <div class="mb-3">
        <button class="btn btn-success me-2" (click)="login()">Login to Access Features</button>
        <button class="btn btn-danger" (click)="logout()">Logout</button>
        <p class="mt-2">Status: {{ isAuthenticated ? 'Authenticated' : 'Not Authenticated' }}</p>
      </div>
    </section>

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
  `,
})
export class DashboardComponent {
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
}
