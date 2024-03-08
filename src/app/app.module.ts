import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { SongListComponent } from './components/songs/song-list/song-list.component';
import { SongDetailsComponent } from './components/songs/song-details/song-details.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { SongCardComponent } from './components/songs/song-card/song-card.component';
import { CardPreloaderComponent } from './components/preloaders/card-preloader/card-preloader.component';
import { NewSongComponent } from './components/songs/new-song/new-song.component';
import { RatingLimitDirective } from './directives/rating-limit.directive';
import { SongDetailsPreloaderComponent } from './components/preloaders/song-details-preloader/song-details-preloader.component';





@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailsComponent,
    NavbarComponent,
    SidebarComponent,
    SongCardComponent,
    CardPreloaderComponent,
    NewSongComponent,
    RatingLimitDirective,
    SongDetailsPreloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
