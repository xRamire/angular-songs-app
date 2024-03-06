import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: any[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getSongs().subscribe(
      (data) => {
        this.songs = data;
      },
      (error) => {
        console.error('Ocurrió un error al obtener las canciones:', error);
      }
    );
  }
}
