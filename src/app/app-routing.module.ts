import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TorneosComponent } from './torneos/componentes/torneos/torneos.component';
import { RankingComponent } from './ranking/componentes/ranking/ranking.component';
import { HistoriaComponent } from './historia/componentes/historia/historia.component';
import { environment } from '../environments/environment';
import { ChesscoinComponent } from './chesscoin/componentes/chesscoin/chesscoin.component';
import { ContactoComponent } from './contacto/componentes/contacto/contacto.component';
import { JugarComponent } from './jugar/componentes/jugar/jugar.component';
import { TacticaComponent } from './tactica/componentes/tactica.component';
 
const routesDevelop: Routes = [
  { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'torneos', component: TorneosComponent },
  { path: 'torneos/:idTorneo', component: TorneosComponent },
  { path: 'jugar', component: JugarComponent },
  { path: 'tactica', component: TacticaComponent },
  { path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) },
  { path: 'chesscoin', component: ChesscoinComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

const routesProd: Routes = [
  { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'torneos', component: TorneosComponent },
  { path: 'torneos/:idTorneo', component: TorneosComponent },
  { path: 'jugar', component: JugarComponent },
  { path: 'tactica', component: TacticaComponent },
  { path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) },
  { path: 'chesscoin', component: ChesscoinComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production? routesProd: routesDevelop)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
