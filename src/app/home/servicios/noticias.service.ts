import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../transversal/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient,
    private firebaseService:FirebaseService
  ) { }

  getNoticias(coleccion:string): Observable<any> {
    return this.firebaseService.getDocumentos(coleccion);
    //return this.http.get('../../assets/noticias/list.json');
  }

  getSchoolNews(): Observable<Object> {

    return this.http.get('../../assets/school/201906-s1.json');
  }
}
