import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  year:number;
  month:number;

  players:Array<Player>;

  constructor(
    private rankingService:RankingService
  ) { }

  ngOnInit() {

    this.year = 2019;
    this.month = 6;

    this.getRanking()

  }

  showPlayer(player:Player){
    this.rankingService.setCurrentPlayer(player);
  }

  getRanking(){

    this.rankingService.getRanking(this.year, this.month).subscribe(
      (data:Array<Player>)=>{
          this.players = data
          console.log(this.players);
      },
      error => {
        this.players = new Array<Player>()
      }
    )
  }
}
