import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';
import { Song } from '../interfaces/song';
import { API_URL } from 'src/environments/environment';
import { Category } from '../interfaces/category';

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

  list(id: number): Observable<Response<Category>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Category>>(`${API_URL}/songs/category/${id}`, { headers: headers });
  }

  search(data: any): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.post<any>(`${API_URL}/songs/search`, data, { headers: headers });
  }

  listFavorites(): Observable<Response<Song>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Song>>(`${API_URL}/songs/favorite`, { headers: headers });
  }

  show(id: number): Observable<Response<Song>> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.get<Response<Song>>(`${API_URL}/songs/${id}`, { headers: headers })
  }

  syncFavorite(data: any): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${this.token}` });
    return this.http.post<any>(`${API_URL}/songs/favorite`, data, { headers: headers });
  }
}
