import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugarComponent } from './componentes/jugar/jugar.component';
import { SharedModule } from '../shared/shared.module';
import { JugarRoutingModule } from './jugar-routing.module';



@NgModule({
  declarations: [JugarComponent],
  imports: [
    CommonModule,
    JugarRoutingModule,
    SharedModule
  ]
})
export class JugarModule { }
