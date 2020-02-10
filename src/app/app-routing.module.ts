import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { JugarComponent } from './jugar/componentes/jugar/jugar.component';
import { TacticaComponent } from './tactica/componentes/tactica.component';
 
const routesDevelop: Routes = [
  { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'torneos', loadChildren:()=>import('./torneos/torneos.module').then(m=>m.TorneosModule) },
  { path: 'jugar', loadChildren:()=>import('./jugar/jugar.module').then(m=>m.JugarModule) },
  { path: 'tactica', loadChildren:()=>import('./tactica/tactica.module').then(m=>m.TacticaModule) },
  { path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) },
  { path: 'chesscoin', loadChildren:()=>import('./chesscoin/chesscoin.module').then(m=>m.ChesscoinModule) },
  { path: 'historia', loadChildren:()=>import('./historia/historia.module').then(m=>m.HistoriaModule) },
  { path: 'contacto', loadChildren:()=>import('./contacto/contacto.module').then(m=>m.ContactoModule) },
  { path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

const routesProd: Routes = [
  { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'torneos', loadChildren:()=>import('./torneos/torneos.module').then(m=>m.TorneosModule) },
  { path: 'jugar', loadChildren:()=>import('./jugar/jugar.module').then(m=>m.JugarModule) },
  { path: 'tactica', loadChildren:()=>import('./tactica/tactica.module').then(m=>m.TacticaModule) },
  { path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) },
  { path: 'chesscoin', loadChildren:()=>import('./chesscoin/chesscoin.module').then(m=>m.ChesscoinModule) },
  { path: 'historia', loadChildren:()=>import('./historia/historia.module').then(m=>m.HistoriaModule) },
  { path: 'contacto',  loadChildren:()=>import('./contacto/contacto.module').then(m=>m.ContactoModule) },
  { path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production? routesProd: routesDevelop)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
