import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  subject = new BehaviorSubject(null);

  constructor(
    private http:HttpClient
  ) { }

  setCurrentPlayer(player:Player){
    this.subject.next(player);
    console.log('setCurrentPlayer: ', player)
  }

  getRanking(year:number, month:number):Observable<Object>{

    const monthStr = month < 10? '0' + month : month;
    return this.http.get(`../../assets/ranking/${year}${monthStr}.json`);
  }
}
