import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('authToken');

    if (isAuthenticated) {
      return true;
    }

    // Auto-assign guest access while we keep guest-only mode.
    localStorage.setItem('authToken', 'guest');
    return true;
  }
}