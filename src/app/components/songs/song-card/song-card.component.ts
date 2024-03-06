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
  @Input() imageUrl: string = '';
  @Input() tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
