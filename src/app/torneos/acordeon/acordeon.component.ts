import { Component, OnInit, Input } from '@angular/core';
import { Torneo } from '../torneo';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {

  @Input('titulo') titulo:string;
  @Input('lista') lista:Array<Torneo>;
  constructor() { }

  ngOnInit() {
  }

}
