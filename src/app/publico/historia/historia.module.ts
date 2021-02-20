import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaRoutingModule } from './historia-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HistoriaComponent } from './componentes/historia/historia.component';


@NgModule({
  declarations: [HistoriaComponent],
  imports: [
    CommonModule,
    HistoriaRoutingModule,
    SharedModule
  ]
})
export class HistoriaModule { }
