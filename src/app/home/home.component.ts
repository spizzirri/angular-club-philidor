import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsResponse } from 'src/app/models/NewsResponse';
import { ScrollService } from 'src/app/scroll.service';
import { Title } from '@angular/platform-browser';
import { Noticia } from '../models/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias:Array<Noticia>

  constructor(
    private newService:NewsService,
    private scrollService:ScrollService,
    private titleService:Title
  ) {
    this.titleService.setTitle("Club Philidor")
    this.noticias = new Array<Noticia>()
  }

  ngOnInit() {
    this.scrollService.setScrollTop();
    this.getNoticias();
  }

  getNoticias(){
    this.newService.getNews().subscribe(
      (data:NewsResponse)=> data.noticias.forEach(element => { this.noticias.push(element) })
    )
  }
}
