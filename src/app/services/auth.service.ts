import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:1337';

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient) {}

  getToken(): string {
    return this.localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<any>(url, {email, password});
  }

  signUp(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<any>(url, {email, password});
  }

  getStatus(): Observable<any> {
    const url = `${this.BASE_URL}/status`;
    return this.http.get<any>(url);
  }
}
