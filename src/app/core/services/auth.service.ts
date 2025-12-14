import { Injectable, signal } from "@angular/core";

const TOKEN_KEY = "token_key";

@Injectable({ providedIn: "root" })
export class AuthService {
  private _isAuthed = signal<boolean>(this.hasToken());

  isAuthenticated() {
    return this._isAuthed();
  }

  login(email: string, password: string) {
    //TODO: mock login, replace with real API
    if (!email || !password) return false;

    localStorage.setItem(TOKEN_KEY, "mock-token");
    this._isAuthed.set(true);
    return true;
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this._isAuthed.set(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
}
