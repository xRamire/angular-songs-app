import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongListComponent } from './components/songs/song-list/song-list.component';
import { SongDetailsComponent } from './components/songs/song-details/song-details.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailsComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
