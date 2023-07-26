import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getHome(data = {username: 'josias', password: '123456'}) {
    // let headers = new HttpHeaders({ 'Accept': 'application/json', 'Authorization':`Bearer ${this.token}` });
    // return this.httpClient.post(`${API_URL}/auth/login`, data, { headers: headers });
    // return this.httpClient.get(`${API_URL}/`, { headers: headers });
  }

}
