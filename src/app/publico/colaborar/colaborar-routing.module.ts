import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaborarComponent } from './componentes/colaborar/colaborar.component';


const routes: Routes = [{
  path:'',
  component:ColaborarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaborarRoutingModule { }
