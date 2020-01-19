import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { TorneosComponent } from './componentes/torneos/torneos.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'torneos',
        component: TorneosComponent
      },
      {
        path: 'noticias',
        component: NoticiasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
