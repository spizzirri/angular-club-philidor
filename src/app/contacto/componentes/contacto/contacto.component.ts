import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  private comentarios:Observable<any>

  constructor(private titleService:Title,
              private firebaseService: FirebaseService) { 
    this.titleService.setTitle("Club Philidor - Contacto");
  }

  ngOnInit() {
    this.comentarios = this.firebaseService.getDocumentos("comentarios", 15)
  }

}
