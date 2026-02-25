import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface UserProfile {
  id: string;
  user: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private _user = signal<UserProfile | null>(null);
  user = this._user.asReadonly();

  private API = '/api/auth';

  login(credentials: { user: string; password: string }) {
    return this.http.post<UserProfile>(`${this.API}/login`, credentials).pipe(
      tap((user) => {
        this._user.set(user);
      }),
    );
  }

  logout() {
    this._user.set(null);
  }

  isAuthenticated() {
    return this._user() !== null;
  }
}
