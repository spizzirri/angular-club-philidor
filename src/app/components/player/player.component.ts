import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { Row } from 'src/app/models/row';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  rowDetail:Row;

  constructor(
    private rankingService:RankingService
  ) { }

  ngOnInit() {

    this.rankingService.subject.subscribe(
      (data)=>{
        this.rowDetail = data;
      }
    )
  }

}
