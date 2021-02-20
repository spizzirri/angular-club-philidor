import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './componentes/ranking/ranking.component';
import { FormsModule } from '@angular/forms';
import { RankingService } from './servicios/ranking.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    RankingService
  ]
})
export class RankingModule { }
