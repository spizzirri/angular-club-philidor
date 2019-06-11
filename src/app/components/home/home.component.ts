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

  bigNews:Array<BigCard>
  smallNews:Array<SmallCard>

  constructor(
    private newService:NewsService
  ) {
    this.bigNews = new Array<BigCard>()
    this.smallNews = new Array<SmallCard>()
  }

  ngOnInit() {

    this.getNews();
  }

  getNews(){
    this.newService.getNews().subscribe(
      (data:NewsResponse)=>{

        data.bigNews.forEach(element => { this.bigNews.push(element) });
        data.smallNews.forEach(element => { this.smallNews.push(element) });
      }
    )
  }
}
