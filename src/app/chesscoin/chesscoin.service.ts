import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChesscoinService {

  constructor(private http:HttpClient) { }

  obtenerListadoDeJugadoresConChessCoin(){
    return this.http.get('../../assets/chesscoin/list.json');
  }
}
