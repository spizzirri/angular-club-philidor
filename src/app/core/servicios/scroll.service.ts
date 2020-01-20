import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router:Router) { }

  setScrollTop(elemento?:string) {
    this.router.events.subscribe((event: NavigationEnd) => {
      if(!elemento)
        window.scroll(0, 0);
      else
        document.getElementById(elemento).scrollIntoView();  
    });
  }
}
