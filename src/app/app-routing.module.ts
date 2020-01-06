import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TorneosComponent } from './torneos/componentes/torneos/torneos.component';
import { PhotosComponent } from './home/componentes/photos/photos.component';
import { HomeComponent } from './home/componentes/home/home.component';
import { RankingComponent } from './ranking/componentes/ranking/ranking.component';
import { HistoriaComponent } from './historia/componentes/historia/historia.component';
import { environment } from '../environments/environment';
import { ChesscoinComponent } from './chesscoin/componentes/chesscoin/chesscoin.component';
import { ContactoComponent } from './contacto/componentes/contacto/contacto.component';
import { JugarComponent } from './jugar/componentes/jugar/jugar.component';
import { TacticaComponent } from './tactica/componentes/tactica.component';
 
const routesDevelop: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'torneos/:idTorneo', component: TorneosComponent },
  { path: 'jugar', component: JugarComponent },
  { path: 'tactica', component: TacticaComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'chesscoin', component: ChesscoinComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

const routesProd: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'torneos/:idTorneo', component: TorneosComponent },
  { path: 'jugar', component: JugarComponent },
  { path: 'tactica', component: TacticaComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'chesscoin', component: ChesscoinComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production? routesProd: routesDevelop)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
