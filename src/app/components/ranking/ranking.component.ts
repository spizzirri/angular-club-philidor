import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { Player } from 'src/app/models/player';
import { Row } from 'src/app/models/row';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  year:number;
  month:number;

  players:Array<Player>;
  tableRows = new Array<Row>();
  tableHeader:Row = {  column1: "Nombre", column2: "Clasico", column3: "Rapido", column4: "Relampago", image: null, country: null}

  constructor(
    private rankingService:RankingService
  ) { }

  ngOnInit() {

    this.year = 2019;
    this.month = 6; 
    this.getRanking()

  }

  getRanking(){

    this.rankingService.getRanking(this.year, this.month).subscribe(
      (data:Array<Player>)=>{
          this.players = data
          data.forEach(
            (elem)=>{
              this.tableRows.push({ "column1": `${elem.surname},${elem.name}`, 
                                    "column2": elem.elo.classic.toString(),
                                    "column3": elem.elo.rapid.toString(), 
                                    "column4": elem.elo.blitz.toString(),
                                    "image": elem.image,
                                    "country": elem.country  
                                  })
            }
          )
      },
      error => {
        this.players = new Array<Player>();
        this.tableRows = new Array<Row>();
        this.tableHeader = null;
      }
    )
  }
}
