import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChesscoinRoutingModule } from './chesscoin-routing.module';
import { ChesscoinComponent } from './componentes/chesscoin/chesscoin.component';
import { ChesscoinService } from './servicios/chesscoin.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ChesscoinComponent],
  imports: [
    CommonModule,
    ChesscoinRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    ChesscoinService
  ]
})
export class ChesscoinModule { }
