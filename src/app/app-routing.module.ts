import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { HistoryComponent } from './history/history.component';
import { EscuelitaComponent } from './components/escuelita/escuelita.component';
import { environment } from '../environments/environment';
import { ChesscoinComponent } from './chesscoin/chesscoin.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VisorpgnComponent } from './components/visorpgn/visorpgn.component';
 
const routesDevelop: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tournament', component: TournamentsComponent },
  { path: 'tournament/:idTorneo', component: TournamentsComponent },
  { path: 'partidas', component: VisorpgnComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'chesscoin', component: ChesscoinComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'escuelita', component: EscuelitaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

const routesProd: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tournament', component: TournamentsComponent },
  { path: 'tournament/:idTorneo', component: TournamentsComponent },
  { path: 'partidas', component: VisorpgnComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'chesscoin', component: ChesscoinComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production? routesProd: routesDevelop)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
