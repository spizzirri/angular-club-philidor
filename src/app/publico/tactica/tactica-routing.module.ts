import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacticaComponent } from './componentes/tactica.component';


const routes: Routes = [{
  path:'',
  component:TacticaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacticaRoutingModule { }
