import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
