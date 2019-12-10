import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
       
  mostrarEnProduccion:any;
  constructor(private router:Router) { 
    this.mostrarEnProduccion = environment;
  }

  ngOnInit() {
  }

  navegar(url:string):void{
    this.router.navigate([`${url}`]);
  }
}
