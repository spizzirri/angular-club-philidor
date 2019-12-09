import { Component, OnInit } from '@angular/core';
import { BigCard } from 'src/app/models/big-card';
import { SmallCard } from 'src/app/models/small-card';
import { NewsService } from 'src/app/services/news.service';
import { NewsResponse } from 'src/app/models/NewsResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias:Array<BigCard>

  constructor(
    private newService:NewsService
  ) {
    this.noticias = new Array<BigCard>()
  }

  ngOnInit() {

    this.getNoticias();
  }

  getNoticias(){
    this.newService.getNews().subscribe(
      (data:NewsResponse)=> data.noticias.forEach(element => { this.noticias.push(element) })
    )
  }
}
