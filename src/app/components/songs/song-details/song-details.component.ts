import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  songDetails: any;

  constructor(private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit(): void {
    const songId = this.route.snapshot.params['id'];
    this.songService.getSongById(songId).subscribe(song => {
      this.songDetails = song;
      console.log(this.songDetails)
    });
  }
}
