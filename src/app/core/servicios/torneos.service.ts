import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  constructor(private firebaseService:FirebaseService) { }

  obtenerTorneos():Observable<any>{
    return this.firebaseService.getDocumentos("torneos");
  }

  guardarTorneo(torneo):Promise<any>{
    return this.firebaseService.setDocumento("torneos", torneo);
  }

  eliminarTorneo(idTorneo):Promise<void>{
    return this.firebaseService.deleteDocumento("torneos", idTorneo);
  }
}
