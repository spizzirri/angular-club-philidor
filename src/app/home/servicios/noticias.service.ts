import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../core/servicios/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private CANTIDAD_DE_NOTICIAS = 4;

  constructor(
    private http: HttpClient,
    private firebaseService:FirebaseService
  ) { }

  getNoticias(coleccion:string): Observable<any> {
    return this.firebaseService.getDocumentos(coleccion, this.CANTIDAD_DE_NOTICIAS);
    //return this.http.get('../../assets/noticias/list.json');
  }

  getSchoolNews(): Observable<Object> {

    return this.http.get('../../assets/school/201906-s1.json');
  }
}
