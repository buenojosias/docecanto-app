import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('TOKEN_KEY');

  getHome(): Observable<any> {
    console.log(this.token);
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get(`${API_URL}/home`, { headers: headers });
  }

}
