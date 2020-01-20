import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseService } from '../../core/servicios/firebase.service';

@Pipe({
  name: 'storage'
})
export class StoragePipe implements PipeTransform {

  constructor(private firebaseService:FirebaseService){

  }

  transform(value: string, carpeta: string): any {
    return this.firebaseService.getMultimedia("noticias", value);
  }

}
