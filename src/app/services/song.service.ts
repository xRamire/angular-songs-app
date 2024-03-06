import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private apiUrl = 'http://localhost:3000/songs'; // La URL de tu servidor JSON

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de canciones del servidor
  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
