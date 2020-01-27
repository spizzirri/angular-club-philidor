import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaComponent } from './componentes/historia/historia.component';


const routes: Routes = [{
  path:'',
  component:HistoriaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaRoutingModule { }
