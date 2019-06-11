import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http:HttpClient
  ) { }

  getNews():Observable<Object>{

    return this.http.get('../../assets/news/201906-s1.json');
  }
}
