import { Component, OnInit } from '@angular/core';
import { ChesscoinService } from './chesscoin.service';
import { Player } from '../models/player';
import { ScrollService } from '../transversal/services/scroll.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chesscoin',
  templateUrl: './chesscoin.component.html',
  styleUrls: ['./chesscoin.component.css']
})
export class ChesscoinComponent implements OnInit {

  nameToFind: string = null;
  people:Array<Player>;

  constructor(private chesscoinService:ChesscoinService, 
              private scrollService:ScrollService,
              private titleService:Title) {
 
    this.titleService.setTitle("Club Philidor - Chesscoin")            
    this.people = new Array<Player>();
  }

  ngOnInit() {
    this.scrollService.setScrollTop();
    this.getChessCoin();
  }

  checkByWord(row: Player) {
    const playerRow: string = JSON.stringify(row).toLowerCase();
    if (this.nameToFind && playerRow.search(this.nameToFind.toLowerCase()) < 0)
      return false
    return true;
  }

  getChessCoin(){
    this.chesscoinService.obtenerListadoDeJugadoresConChessCoin()
    .subscribe((data:Array<Player>)=>this.people = data.sort((a:Player, b:Player)=>a.name.localeCompare(b.name)));
  }
}