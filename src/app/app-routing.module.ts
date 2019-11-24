import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HistoryComponent } from './components/history/history.component';
import { EscuelitaComponent } from './components/escuelita/escuelita.component';
import { environment } from '../environments/environment';
 
const routesDevelop: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tournament/:type', component: TournamentsComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'escuelita', component: EscuelitaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

const routesProd: Routes = [
  { path: 'home', component: RankingComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production? routesProd: routesDevelop)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
