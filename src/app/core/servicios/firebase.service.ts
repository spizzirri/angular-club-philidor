import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comentario } from '../../shared/modelos/comentario';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db:AngularFirestore, 
              private storage:AngularFireStorage) { }

  getDocumentos(coleccion:string, limite?:number):Observable<any>{
    if(limite)
      return this.db.collection(coleccion, ref => ref.limit(limite).orderBy('fecha', 'desc')).valueChanges({ idField: "id" });
    else
      return this.db.collection(coleccion).valueChanges({ idField: "id" });
  }

  getDocumentoById(coleccion:string, idDocumento:string){
    return this.db.doc(`${coleccion}/${idDocumento}`).valueChanges();
  }

  setDocumento(coleccion:string, documento:Comentario){
    return this.db.collection(coleccion).add(documento);
  }

  getMultimedia(carpeta:string, archivo:string){
    return this.storage.ref(`${carpeta}/${archivo}`).getDownloadURL();
  }

  setMultimedia(carpeta:string, archivo:string, data:any){
    return this.storage.upload(`${carpeta}/${archivo}`, data);
  }

  eliminarMultimedia(carpeta:string, archivo:string){
    return this.storage.ref(`${carpeta}/${archivo}`).delete();
  }

  deleteDocumento(coleccion:string, id:string):Promise<void>{
    return this.db.doc(`${coleccion}/${id}`).delete();
  }
}
