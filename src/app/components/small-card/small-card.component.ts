import { Component, OnInit, Input } from '@angular/core';
import { SmallCard } from 'src/app/models/small-card';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input("data") data:SmallCard;
  @Input("id") id:number;

  constructor() { }

  ngOnInit() {
    console.log('smallCard: ', this.data);
    console.log('smallCard: ', this.id);
  }

}
