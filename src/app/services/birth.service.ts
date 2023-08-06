import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BirthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  list(period: string): Observable<any[]> {
    const token = this.storageService.getToken();
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any[]>(`${API_URL}/births/${period}`, { headers: headers });
  }
}
