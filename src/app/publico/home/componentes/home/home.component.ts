import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/core/servicios/noticias.service';
import { ScrollService } from 'src/app/core/servicios/scroll.service';
import { Title } from '@angular/platform-browser';
import { Noticia } from '../../../../shared/modelos/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias:Array<Noticia>

  constructor(
    private noticiasService:NoticiasService,
    private scrollService:ScrollService,
    private titleService:Title
  ) {
    this.titleService.setTitle("Club Philidor");
    this.noticias = new Array<Noticia>();
  }

  ngOnInit() {
    this.scrollService.setScrollTop();
    this.getNoticias();
  }

  getNoticias(){
    this.noticiasService.obtenerNoticias().subscribe(
      (noticias:Array<Noticia>)=> { 
        noticias.forEach(element => this.noticias.push(element));
        this.noticias = this.noticias.sort((a:Noticia, b:Noticia)=> -1*a.fecha.localeCompare(b.fecha))
      },
      (err)=>console.error("Ocurrio un error al obtener las noticias ", err)
    )
  }
}
