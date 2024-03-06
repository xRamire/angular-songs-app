import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SongListComponent } from './components/songs/song-list/song-list.component';
import { SongDetailsComponent } from './components/songs/song-details/song-details.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { SongCardComponent } from './components/songs/song-card/song-card.component';
import { CardPreloaderComponent } from './components/preloaders/card-preloader/card-preloader.component';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailsComponent,
    NavbarComponent,
    SidebarComponent,
    SongCardComponent,
    CardPreloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
