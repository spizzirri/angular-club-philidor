import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasesComponent } from './componentes/clases/clases.component';


const routes: Routes = [{
  path: '',
  component:ClasesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
