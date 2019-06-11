import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http:HttpClient
  ) { }

  getImages(relativePath:String):Observable<Object>{
    return this.http.get(`../../assets/images/${relativePath}`);
  }

}
