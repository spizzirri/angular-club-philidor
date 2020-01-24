import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { NoticiasService } from 'src/app/core/servicios/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  formulario:FormGroup;
  imagenes: any[];
  noticias:Array<any>;

  constructor(private formBuilder:FormBuilder,
              private noticiasService:NoticiasService) { 
    this.imagenes = new Array();
    this.noticias = new Array();
    this.construirFormulario();
    this.obtenerNoticias();
  }

  ngOnInit() {
  }

  public construirFormulario(){
    this.formulario = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      fecha:['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      link: [''],
      imagen1:[''],
      imagen2:[''],
      imagen3:[''],
    })
  }

  public validarArchivo(event){
    switch(event.target.id){
      case "imagen1": this.imagenes[0] = event.target.files[0]; break; 
      case "imagen2": this.imagenes[1] = event.target.files[0]; break;
      case "imagen3": this.imagenes[2] = event.target.files[0]; break;
    }
  }

  public obtenerNoticias(){
    this.noticiasService.obtenerNoticias()
      .subscribe((noticias)=> this.noticias = noticias);
  }

  public eliminarNoticia(idNoticia:string){
    this.noticiasService.obtenerNoticiasById(idNoticia)
      .subscribe((noticia)=> {
        if(noticia.imagenes){
          this.noticiasService.eliminarMultimedia(noticia.imagenes[0]);
          this.noticiasService.eliminarMultimedia(noticia.imagenes[1]);
          this.noticiasService.eliminarMultimedia(noticia.imagenes[2]);
        }
        this.noticiasService.eliminarNoticia(idNoticia);
      });
  }

  public guardarNoticia(event: Event){

    const noticia = {
      titulo: this.formulario.get('titulo').value,
      texto: this.formulario.get('texto').value,
      fecha: this.formulario.get('fecha').value,
      link: this.formulario.get('link').value,
      imagenes: [
          this.imagenes[0].name,
          this.imagenes[1].name,
          this.imagenes[2].name
      ]
    }

    this.noticiasService.guardarImagen(this.imagenes[0].name, this.imagenes[0]);
    this.noticiasService.guardarImagen(this.imagenes[1].name, this.imagenes[1]);
    this.noticiasService.guardarImagen(this.imagenes[2].name, this.imagenes[2]);

    this.noticiasService.guardarNoticia(noticia);
    this.construirFormulario();  
  }

}
