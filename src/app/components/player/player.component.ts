import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player:Player;

  constructor(
    private rankingService:RankingService
  ) { }

  ngOnInit() {

    this.rankingService.subject.subscribe(
      (data)=>{
        this.player = data;
      }
    )
  }

}
