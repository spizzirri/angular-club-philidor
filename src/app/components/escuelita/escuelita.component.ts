import { Component, OnInit } from '@angular/core';
import { BigCard } from 'src/app/models/big-card';
import { NewsService } from 'src/app/services/news.service';
import { NewsResponse } from 'src/app/models/NewsResponse';

@Component({
  selector: 'app-escuelita',
  templateUrl: './escuelita.component.html',
  styleUrls: ['./escuelita.component.css']
})
export class EscuelitaComponent implements OnInit {

  noticias: Array<BigCard>
  constructor(private newService: NewsService) {
    this.noticias = new Array<BigCard>()
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newService.getSchoolNews().subscribe(
      (data: NewsResponse) => {

        data.noticias.forEach(element => { this.noticias.push(element) });
      }
    )
  }
}
