import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Row } from '../../shared/modelos/row';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  subject = new BehaviorSubject(null);

  constructor(
    private http:HttpClient
  ) { }

  setCurrentPlayer(row:Row){
    this.subject.next(row);
    console.log('setCurrentRow: ', row)
  }

  getRanking(year:number, month:number):Observable<Object>{

    const monthStr = month < 10? '0' + month : month;
    return this.http.get(`../../assets/ranking/${year}${monthStr}.json`);
  }
}
