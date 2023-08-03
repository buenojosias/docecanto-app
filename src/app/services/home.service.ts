import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  // token = localStorage.getItem('TOKEN_KEY');

  getHome(): Observable<any> {
    const token = this.storageService.getToken();
    let headers = new HttpHeaders({ 'Authorization':`Bearer ${token}` });
    return this.http.get(`${API_URL}/home`, { headers: headers });
  }

}
