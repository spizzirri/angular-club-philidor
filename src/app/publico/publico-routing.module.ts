import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

const routesDevelop: Routes = [

    { path: '', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
    { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
    { path: 'torneos', loadChildren:()=>import('./torneos/torneos.module').then(m=>m.TorneosModule) },
    { path: 'jugar', loadChildren:()=>import('./jugar/jugar.module').then(m=>m.JugarModule) },
    { path: 'tactica', loadChildren:()=>import('./tactica/tactica.module').then(m=>m.TacticaModule) },
    { path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) },
    { path: 'chesscoin', loadChildren:()=>import('./chesscoin/chesscoin.module').then(m=>m.ChesscoinModule) },
    { path: 'historia', loadChildren:()=>import('./historia/historia.module').then(m=>m.HistoriaModule) },
    { path: 'contacto', loadChildren:()=>import('./contacto/contacto.module').then(m=>m.ContactoModule) },
    { path: 'clases', loadChildren:()=> import('./clases/clases.module').then(m=>m.ClasesModule)},
    { path: 'colaborar', loadChildren:()=> import('./colaborar/colaborar.module').then(m=>m.ColaborarModule)},
    { path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

const routesProd: Routes = [
    { path: '', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
    { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
    { path: 'torneos', loadChildren:()=>import('./torneos/torneos.module').then(m=>m.TorneosModule) },
    { path: 'jugar', loadChildren:()=>import('./jugar/jugar.module').then(m=>m.JugarModule) },
    { path: 'tactica', loadChildren:()=>import('./tactica/tactica.module').then(m=>m.TacticaModule) },
    { path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) },
    { path: 'chesscoin', loadChildren:()=>import('./chesscoin/chesscoin.module').then(m=>m.ChesscoinModule) },
    { path: 'historia', loadChildren:()=>import('./historia/historia.module').then(m=>m.HistoriaModule) },
    { path: 'contacto',  loadChildren:()=>import('./contacto/contacto.module').then(m=>m.ContactoModule) },
    { path: 'clases', loadChildren:()=> import('./clases/clases.module').then(m=>m.ClasesModule)},
    { path: 'colaborar', loadChildren:()=> import('./colaborar/colaborar.module').then(m=>m.ColaborarModule)},
    { path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

@NgModule({
    imports: [RouterModule.forChild(environment.production? routesProd: routesDevelop)],
    exports: [RouterModule]
})
export class PublicoRoutingModule { }
  
