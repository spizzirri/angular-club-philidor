import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TorneosComponent } from './componentes/torneos/torneos.component';


const routes: Routes = [
  {
    path: '',
    component: TorneosComponent
  },
  {
    path: ':idTorneo',
    component: TorneosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneosRoutingModule { }
