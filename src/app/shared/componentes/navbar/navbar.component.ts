import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
       
  toggles:any;
  constructor(private router:Router) { 
    this.toggles = environment.vistas;
  }

  ngOnInit() {
  }

  navegar(url:string):void{
    this.router.navigate([`${url}`]);
  }
}
