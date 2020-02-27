import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesComponent } from './componentes/clases/clases.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ClasesComponent],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    SharedModule
  ]
})
export class ClasesModule { }
