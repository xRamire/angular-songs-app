import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() artist: string = '';
  @Input() album: string = '';
  @Input() poster: string = '';
  @Input() genre: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
