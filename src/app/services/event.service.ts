import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Event } from '../interfaces/event';
import { Response } from '../interfaces/response';
import { Song } from '../interfaces/song';

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

  songs(id: number): Observable<Response<Song>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Song>>(`${API_URL}/events/${id}/songs`, { headers: headers });
  }

  syncAnswer(data: any): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.post<any>(`${API_URL}/events/sync-answer`, data, { headers: headers });
  }
}
