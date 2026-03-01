import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';
  private roleKey = 'user_role';   // ✅ ADD THIS

  constructor() { }

  // ✅ Save token after login
  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // ✅ Save role
  setRole(role: string): void {     // ✅ ADD THIS
    localStorage.setItem(this.roleKey, role);
  }

  // ✅ Get role
  getRole(): string | null {        // ✅ ADD THIS
    return localStorage.getItem(this.roleKey);
  }

  // ✅ Remove token on logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);  // ✅ ALSO REMOVE ROLE
  }

  // ✅ Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // ✅ Get token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }



}

