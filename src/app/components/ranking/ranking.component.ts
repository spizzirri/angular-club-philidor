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

  nameToFind: string = null;
  year: number;
  month: number;
  people: Array<Player>;

  constructor(
    private rankingService: RankingService
  ) { }

  ngOnInit() {

    this.year = 2019;
    this.month = 6;
    this.getRanking()

  }

  checkByWord(row: Player) {
    const playerRow: string = JSON.stringify(row).toLowerCase();
    if (this.nameToFind && playerRow.search(this.nameToFind.toLowerCase()) < 0)
      return false
    return true;
  }

  addBadgeByNumber(number: number) {
    if (number > 0)
      return "badge badge-success";
    else
      return "badge badge-danger";
  }

  getRanking() {

    this.rankingService.getRanking(this.year, this.month).subscribe(
      (data: Array<Player>) => this.people = data.sort((a: Player, b: Player): number => a.ranking.classic > b.ranking.classic ? 1 : -1),
      error => this.people = new Array<Player>()
    )
  }
}
