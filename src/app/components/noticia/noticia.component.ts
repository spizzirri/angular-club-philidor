import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
declare let $

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input("data") data: Noticia;
  @Input("id") id: number;

  constructor() { 
    $('.carousel').carousel({
      "interval":4000
    });
  }

  ngOnInit() {}

}
