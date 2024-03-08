import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:3000';
  private songsWithArtistInfoSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de canciones con información del artista
  getSongsWithArtistInfo(): Observable<any[]> {
    // Si ya tenemos la lista de canciones con información del artista, la devolvemos
    if (this.songsWithArtistInfoSubject.value.length > 0) {
      return this.songsWithArtistInfoSubject.asObservable();
    } else {
      // Si no, realizamos la combinación de observables y mapeamos los nombres de los artistas con las canciones
      return forkJoin({
        songs: this.getSongs(),
        artists: this.getArtists()
      }).pipe(
        map(({ songs, artists }) => {
          const songsWithArtistInfo = songs.map(song => {
            const artist = artists.find(artist => artist.id === song.artist);
            return { ...song, artistName: artist ? artist.name : 'Unknown' };
          });
          // Almacenamos la lista de canciones con información del artista en el BehaviorSubject
          this.songsWithArtistInfoSubject.next(songsWithArtistInfo);
          return songsWithArtistInfo;
        })
      );
    }
  }

  // Método para obtener la lista de canciones del servidor
  private getSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/songs`);
  }

  // Método para obtener la lista de artistas del servidor
  private getArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/artists`);
  }

  getSongById(id: number): Observable<any> {
    return forkJoin({
      song: this.http.get<any>(`${this.apiUrl}/songs/${id}`),
      artists: this.getArtists()
    }).pipe(
      map(({ song, artists }) => {
        const artist = artists.find(artist => artist.id === song.artist);
        const artistName = artist ? artist.name : 'Unknown';
        return { ...song, artistName };
      })
    );
  }

  

  createSong(songData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/songs`, songData);
  }
  
}
