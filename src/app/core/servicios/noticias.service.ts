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

  obtenerNoticiasById(idNoticia:string):Observable<any>{
    return this.firebaseService.getDocumentoById("noticias", idNoticia);
  }

  guardarNoticia(noticia):Promise<any>{
    return this.firebaseService.setDocumento("noticias", noticia);
  }

  guardarImagen(archivo:string, data:any){
    return this.firebaseService.setMultimedia("noticias", archivo, data);
  }

  eliminarMultimedia(archivo:string){
    return this.firebaseService.eliminarMultimedia("noticias", archivo);
  }

  eliminarNoticia(idNoticia:string):Promise<void>{
    return this.firebaseService.deleteDocumento("noticias", idNoticia);
  }
}
