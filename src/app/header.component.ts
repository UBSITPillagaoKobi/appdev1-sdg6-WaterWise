import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/usage">Usage</a>
      </nav>
    </header>
  `,
  styles: [
    `
      .app-header { padding: 0.5rem 1rem; background: #0b5; color: white; }
      .app-header nav { display:flex; gap:1rem }
      .app-header a { color: white; text-decoration: none; font-weight:600 }
    `
  ]
})
export class HeaderComponent {}
