import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChesscoinComponent } from './componentes/chesscoin/chesscoin.component';


const routes: Routes = [{
  path:'',
  component: ChesscoinComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChesscoinRoutingModule { }
