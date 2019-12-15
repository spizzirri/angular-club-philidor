import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Club Philidor - Jugar");
  }

  ngOnInit() {
  }

}
