import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsResponse } from 'src/app/models/NewsResponse';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-escuelita',
  templateUrl: './escuelita.component.html',
  styleUrls: ['./escuelita.component.css']
})
export class EscuelitaComponent implements OnInit {

  noticias: Array<Noticia>
  constructor(private newService: NewsService) {
    this.noticias = new Array<Noticia>()
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
