import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Event } from '../interfaces/event';
import { Response } from '../interfaces/response';
import { Song } from '../interfaces/song';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  list(): Observable<Response<Event[]>> {
    const token = this.storageService.getToken();
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Response<Event[]>>(`${API_URL}/events`, { headers: headers });
  }

  show(id: number): Observable<Response<Event>> {
    const token = this.storageService.getToken();
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Response<Event>>(`${API_URL}/events/${id}`, { headers: headers });
  }

  songs(id: number): Observable<Response<Song>> {
    const token = this.storageService.getToken();
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Response<Song>>(`${API_URL}/events/${id}/songs`, { headers: headers });
  }

  syncAnswer(data: any): Observable<any> {
    const token = this.storageService.getToken();
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post<any>(`${API_URL}/events/sync-answer`, data, { headers: headers });
  }
}
