import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // authenticated = false;

  constructor(private httpClient: HttpClient) { }

  doLogin(data: any) {
    let headers = new HttpHeaders({ 'Accept': 'application/json' });
    return this.httpClient.post(`${API_URL}/auth/login`, data, { headers: headers });
  }

  doLogout() {
    const token = localStorage.getItem('TOKEN_KEY');
    let headers = new HttpHeaders({ 'Accept': 'application/json', 'Authorization':`Bearer ${token}` });
    return this.httpClient.get(`${API_URL}/auth/logout`, { headers: headers });
  }

  checkLogin() {
    return !!localStorage.getItem('TOKEN_KEY');
  }

}
