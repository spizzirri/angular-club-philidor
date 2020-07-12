import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaborarComponent } from './componentes/colaborar/colaborar.component';
import { ColaborarRoutingModule } from './colaborar-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ColaborarComponent],
  imports: [
    CommonModule,
    ColaborarRoutingModule,
    SharedModule
  ]
})
export class ColaborarModule { }
