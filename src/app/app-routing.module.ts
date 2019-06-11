import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'tournament/:type',  component: TournamentsComponent },
  { path: 'ranking',        component: RankingComponent },
  { path: 'photos',          component: PhotosComponent },
  { path: 'history',          component: HistoryComponent },
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
