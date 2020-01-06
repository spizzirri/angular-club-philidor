import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FirebaseService } from 'src/app/transversal/services/firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Club Philidor - Contacto");
  }

  ngOnInit() {
  }

}
