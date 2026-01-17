import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): boolean {
    // Fake credential rule for now
    const okEmail = email.toLowerCase() === 'mahsa@test.com';
    const okPassword = password === 'Password123';

    if (!okEmail || !okPassword) return false;

    localStorage.setItem(TOKEN_KEY, 'fake-jwt-token');
    return true;
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
}