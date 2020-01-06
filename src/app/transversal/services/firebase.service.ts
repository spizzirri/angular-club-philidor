import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comentario } from '../modelos/comentario';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db:AngularFirestore, 
              private storage:AngularFireStorage) { }

  getDocumentos(coleccion:string):Observable<any>{
    return this.db.collection(coleccion, ref => ref.limit(4).orderBy('fecha', 'desc')).valueChanges();
  }

  setDocumento(coleccion:string, documento:Comentario){
    return this.db.collection(coleccion).add(documento);
  }

  getMultimedia(carpeta:string, archivo:string){
    return this.storage.ref(`${carpeta}/${archivo}`).getDownloadURL();
  }
}
