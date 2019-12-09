import { Component, OnInit, Input } from '@angular/core';
import { BigCard } from 'src/app/models/big-card';
declare let $

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input("data") data: BigCard;
  @Input("id") id: number;

  constructor() { 
    $('.carousel').carousel({
      "interval":4000
    });
  }

  ngOnInit() {
    console.log('bigCard: ', this.data);
    console.log('bigCard: ', this.id);
  }

}
