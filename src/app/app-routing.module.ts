import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './components/songs/song-list/song-list.component';
import { NewSongComponent } from './components/songs/new-song/new-song.component';
import { SongDetailsComponent } from './components/songs/song-details/song-details.component';

const routes: Routes = [
  { path: '', component: SongListComponent, data: { title: 'Canciones' } },
  { path: 'new-song', component: NewSongComponent, data: { title: 'Nueva Canción' } },
  { path: 'song-details/:artist/:title/:id', component: SongDetailsComponent, data: { title: 'Detalles de la Canción' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
