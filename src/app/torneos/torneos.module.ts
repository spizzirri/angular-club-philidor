import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneosComponent } from './componentes/torneos/torneos.component';
import { FormsModule } from '@angular/forms';
import { AcordeonComponent } from './componentes/acordeon/acordeon.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TorneosComponent, AcordeonComponent],
  imports: [
    CommonModule,
    TorneosRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class TorneosModule { }
