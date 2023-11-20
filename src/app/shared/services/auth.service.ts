import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';

  constructor() {}

  isLogged = (token: string) => {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  };

  isLogout = () => {
    sessionStorage.removeItem(this.TOKEN_KEY);
  };

  isAuthenticated = (): boolean => {
    return !!sessionStorage.getItem(this.TOKEN_KEY);
  };

  getToken(): string | null {
    const token = sessionStorage.getItem(this.TOKEN_KEY);
    return token ? token.replace(/"/g, '') : null;
  }
}
