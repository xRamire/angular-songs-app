// new-song.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { countries } from 'countries-list';

import { SongService } from 'src/app/services/song.service';

interface Country {
  code: string;
  name: string;
}

interface NewSong {
  title: string;
  artist: any;
  genre: string[];
  company: string[];
  country: string;
  year: number;
  rating: string;
  poster: string;
  duration: number;
}

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent implements OnInit {
  
  newSong: NewSong = {
    title: '',
    artist: '',
    genre: [],
    company: [],
    country: '',
    year: 0,
    rating: '',
    poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
    duration: 0
  };

  countries: Country[] = Object.values(countries).map((country: any) => ({
    code: country.code,
    name: country.name
  }));

  isCreating: boolean = false;
  

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private fb: FormBuilder,
    private songService: SongService
  ) { }

  ngOnInit(): void {
  }

  addGenre(event: any): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.newSong.genre.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeGenre(genre: string): void {
    const index = this.newSong.genre.indexOf(genre);

    if (index >= 0) {
      this.newSong.genre.splice(index, 1);
    }
  }

  addCompany(event: any): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.newSong.company.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeCompany(company: string): void {
    const index = this.newSong.company.indexOf(company);

    if (index >= 0) {
      this.newSong.company.splice(index, 1);
    }
  }

  onSubmit() {
    this.isCreating = true;

    const selectedDate = new Date(this.newSong.year);
    const selectedYear = selectedDate.getFullYear();
    this.newSong.year = selectedYear;
    this.newSong.artist = 1 // El motivo de asignar un número es para la coexión de datos con el resto de canciones, que llevan una ID de un artista como referencia
    // Una opción Podría ser hacer una selección de artistas recuperando la información de la base de datos de artistas ya existentes y asignar el ID...

    this.songService.createSong(this.newSong)
    .subscribe(response => {
      console.log('Canción creada con éxito', response);
      this.resetForm();
    },
    error => {
      console.error('No se ha podido crear la canción.', error);
      
      setTimeout(() => {
        this.isCreating = false;
      }, 2000);
    });
    
  }

  resetForm(): void {

    this.newSong = {
      title: '',
      artist: '',
      genre: [],
      company: [],
      country: '',
      year: 0,
      rating: '',
      poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
      duration: 0
    };

    setTimeout(() => {
      this.isCreating = false;
    }, 2000);

  }

  
}
