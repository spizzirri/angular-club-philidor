import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: '', loadChildren:()=> import('./publico/publico.module').then(m=>m.PublicoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
