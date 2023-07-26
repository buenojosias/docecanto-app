import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';
import { Song } from '../interfaces/song';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(
    private http: HttpClient
  ) { }

  token = localStorage.getItem('TOKEN_KEY');

  index(): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<any>(`${API_URL}/songs`, { headers: headers });
  }

  list(): Observable<Response<Song[]>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Song[]>>(`${API_URL}/songs`, { headers: headers });
  }

  show(id: number): Observable<Response<Song>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Song>>(`${API_URL}/songs/${id}`, { headers: headers })
  }
}
