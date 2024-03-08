import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { countries } from 'countries-list';

import { SongService } from 'src/app/services/song.service';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent implements OnInit {
  
  newSongForm!: FormGroup; // Formulario reactivo
  
  countries: Country[] = Object.values(countries).map((country: any) => ({
    code: country.code,
    name: country.name
  }));

  isCreating: boolean = false;
  isSuccess: boolean = false;
  isNotSuccess: boolean = false;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private fb: FormBuilder,
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.newSongForm = this.fb.group({
      title: ['', Validators.required],
      artist: [null, Validators.required],
      genre: [[]],
      company: [[]],
      country: ['', Validators.required],
      year: [null, Validators.required],
      rating: ['', Validators.required]
    });
  }



  addGenre(event: any): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const genres = this.newSongForm.get('genre');
      if (genres) {
        const currentGenres = genres.value || [];
        currentGenres.push(value.trim());
        genres.setValue(currentGenres);
      }
    }

    if (input) {
      input.value = '';
    }
  }

  removeGenre(genre: string): void {
    const genres = this.newSongForm.get('genre');
    if (genres) {
      const index = genres.value.indexOf(genre);
      if (index >= 0) {
        const currentGenres = genres.value;
        currentGenres.splice(index, 1);
        genres.setValue(currentGenres);
      }
    }
  }

  addCompany(event: any): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const companies = this.newSongForm.get('company');
      if (companies) {
        const currentCompanies = companies.value || [];
        currentCompanies.push(value.trim());
        companies.setValue(currentCompanies);
      }
    }

    if (input) {
      input.value = '';
    }
  }

  removeCompany(company: string): void {
    const companies = this.newSongForm.get('company');
    if (companies) {
      const index = companies.value.indexOf(company);
      if (index >= 0) {
        const currentCompanies = companies.value;
        currentCompanies.splice(index, 1);
        companies.setValue(currentCompanies);
      }
    }
  }

  onSubmit() {
    this.isCreating = true;

    if (this.newSongForm.valid) {
      const formValue = this.newSongForm.value;
      const selectedDate = new Date(formValue.year);
      const selectedYear = selectedDate.getFullYear();
      formValue.year = selectedYear;
      formValue.artist = 1;      
      
      this.songService.createSong(formValue)
        .subscribe(response => {
          this.resetForm();
        },
        error => {
          console.error('No se ha podido crear la canción.', error);
          setTimeout(() => {
            this.isCreating = false;
            this.isNotSuccess = true;
          }, 1000);

          setTimeout(() => {
            this.isNotSuccess = false;
          }, 3000);
        });
    } else {
      console.error('El formulario no es válido. Por favor, complete todos los campos obligatorios.');
    }
  }

  resetForm(): void {
    this.newSongForm.reset({
      title: '',
      artist: null,
      genre: [],
      company: [],
      country: '',
      year: null,
      rating: ''
    });

    setTimeout(() => {
      this.isCreating = false;
      this.isSuccess = true;
    }, 1000);

    setTimeout(() => {
      this.isSuccess = false;
    }, 3000);

  }
  
}
