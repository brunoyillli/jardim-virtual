import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl = 'http://localhost:3000/plantas';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
