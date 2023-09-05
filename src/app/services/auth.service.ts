import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI = 'http://localhost:4200/'
  sessionStorage: any;
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.baseAPI)
  }
  getLoginDetails(username: any, password: any) {
    return this.http.get("");
  }
  isLoggedIn() {
    return this.sessionStorage.getItem('username') != null;
  }
  // Statically returning true
  haveAccess() {
    return true;
  }
  getUserRole() {
    return
  }
  login(username: any, password: any): Observable<boolean> {
    return this.http.post<{ token: string }>('/api/auth', { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}

