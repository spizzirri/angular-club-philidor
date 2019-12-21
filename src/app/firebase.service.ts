import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comentario } from './models/comentario';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db:AngularFirestore) { 
     
  }

  getDocumentos(coleccion:string){
    return this.db.collection(coleccion).valueChanges();
  }

  setDocumento(collection:string, documento:Comentario){
    return this.db.collection(collection).add(documento);
  }
}
