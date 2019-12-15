import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tactica',
  templateUrl: './tactica.component.html',
  styleUrls: ['./tactica.component.css']
})
export class TacticaComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Club Philidor - Tactica");
  }

  ngOnInit() {
  }

}
