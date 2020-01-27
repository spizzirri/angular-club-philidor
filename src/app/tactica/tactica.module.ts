import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacticaRoutingModule } from './tactica-routing.module';
import { TacticaComponent } from './componentes/tactica.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TacticaComponent],
  imports: [
    CommonModule,
    TacticaRoutingModule,
    SharedModule
  ]
})
export class TacticaModule { }
