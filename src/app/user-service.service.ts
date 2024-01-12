import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {}

  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      token: localStorage.getItem('token') || '',
    });
    return headers;
  }

  registerUser(data: any) {
    return this.http.post(`${this.url}/create_user`, data);
  }

  login(loginData: any) {
    return this.http.post(`${this.url}/login`, loginData);
  }

  getUserList() {
    return this.http.get(`${this.url}/user_list`);
  }
}
