import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

const routes: Routes = [
    { path: '', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) },
    { path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) }
];

if(environment.vistas.torneos)
    routes.push({ path: 'torneos', loadChildren:()=>import('./torneos/torneos.module').then(m=>m.TorneosModule) })
if(environment.vistas.ranking)
    routes.push({ path: 'ranking', loadChildren:()=> import('./ranking/ranking.module').then(m=>m.RankingModule) })
if(environment.vistas.historia)
    routes.push({ path: 'historia', loadChildren:()=>import('./historia/historia.module').then(m=>m.HistoriaModule) })
if(environment.vistas.contacto)
    routes.push({ path: 'contacto', loadChildren:()=>import('./contacto/contacto.module').then(m=>m.ContactoModule) })
if(environment.vistas.clases)
    routes.push({ path: 'clases', loadChildren:()=> import('./clases/clases.module').then(m=>m.ClasesModule)})
if(environment.vistas.colaborar)
    routes.push({ path: 'colaborar', loadChildren:()=> import('./colaborar/colaborar.module').then(m=>m.ColaborarModule)})

routes.push({ path: '**', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule) })

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicoRoutingModule { }
  
