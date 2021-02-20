import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/core/servicios/scroll.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private scrollService:ScrollService,
    private titleService:Title
  ) {
    this.titleService.setTitle("Club Philidor");
  }

  ngOnInit() {
    this.scrollService.setScrollTop();
  }
}
