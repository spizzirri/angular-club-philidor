import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private firebaseService:FirebaseService) { }

  obtenerNoticias():Observable<any>{
    return this.firebaseService.getDocumentos("noticias");
  }

  guardarNoticia(noticia):Promise<any>{
    return this.firebaseService.setDocumento("noticias", noticia);
  }

  eliminarNoticia(idNoticia):Promise<void>{
    return this.firebaseService.deleteDocumento("noticias", idNoticia);
  }
}
