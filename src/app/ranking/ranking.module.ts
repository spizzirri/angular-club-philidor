import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './componentes/ranking/ranking.component';
import { FormsModule } from '@angular/forms';
import { RankingService } from './servicios/ranking.service';


@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    FormsModule
  ],
  providers:[
    RankingService
  ]
})
export class RankingModule { }
