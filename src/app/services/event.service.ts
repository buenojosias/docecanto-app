import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Event } from '../interfaces/event';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('TOKEN_KEY');

  list(): Observable<Response<Event[]>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Event[]>>(`${API_URL}/events`, { headers: headers });
  }

  show(id: number): Observable<Response<Event>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Event>>(`${API_URL}/events/${id}`, { headers: headers });
  }

  syncAnswer(data: any) {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.post(`${API_URL}/events/sync-answer`, data, { headers: headers });
  }
}
