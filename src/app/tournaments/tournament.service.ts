import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http:HttpClient) { }

  obtenerTorneos():Observable<any>{
    return this.http.get('../../assets/tournaments/list.json');
  }
}
