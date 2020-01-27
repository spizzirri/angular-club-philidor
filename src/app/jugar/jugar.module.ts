import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugarComponent } from './componentes/jugar/jugar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [JugarComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class JugarModule { }
