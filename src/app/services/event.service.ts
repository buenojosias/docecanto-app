import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('TOKEN_KEY');

  list(): Observable<Event[]> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Event[]>(`${API_URL}/events`, { headers: headers });
  }

  show(id: number) {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get(`${API_URL}/events/${id}`, { headers: headers });
  }

  syncAnswer(data: any) {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.post(`${API_URL}/events/sync-answer`, data, { headers: headers });
  }
}
