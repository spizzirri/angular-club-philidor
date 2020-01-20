import { Component, OnInit, Input } from '@angular/core';
import { RankingService } from 'src/app/ranking/servicios/ranking.service';
import { Row } from 'src/app/shared/modelos/row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('tableHeader') tableHeader:Row;
  @Input('tableRows') tableRows:Array<Row>;

  constructor(
    private rankingService:RankingService
  ) { }

  ngOnInit() {
    
  }

  showPlayer(row:Row){
    this.rankingService.setCurrentPlayer(row);
  }
}
