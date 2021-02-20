import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugarComponent } from './componentes/jugar/jugar.component';


const routes: Routes = [{
    path:'',
    component: JugarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugarRoutingModule { }
