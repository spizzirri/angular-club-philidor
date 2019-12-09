import { Component, OnInit } from '@angular/core';
import { ChesscoinService } from './chesscoin.service';
import { Player } from '../models/player';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-chesscoin',
  templateUrl: './chesscoin.component.html',
  styleUrls: ['./chesscoin.component.css']
})
export class ChesscoinComponent implements OnInit {

  nameToFind: string = null;
  people:Array<Player>;
  imagenChessCoinRey:string;

  constructor(private chesscoinService:ChesscoinService, 
              private scrollService:ScrollService) { 
    this.people = new Array<Player>();
    this.imagenChessCoinRey = '../../assets/chesscoin/chesscoin2.jpg';
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
