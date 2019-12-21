import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FirebaseService } from 'src/app/firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  comentarioForm:FormGroup;
  enviandoComentario:boolean;
  mensajeEnviado:boolean;

  constructor(private titleService:Title,
             private firebaseService:FirebaseService,
             private formBuild:FormBuilder) { 

              this.enviandoComentario = false;
              this.mensajeEnviado = false;
              this.titleService.setTitle("Club Philidor - Contacto");
              this.comentarioForm = this.formBuild.group({
                comentarioDelVisitante:'',
                nombreDelVisitante:''
              })
  }

  enviarComentario(){
    const comentarios:Comentario = {
      nombre: this.comentarioForm.controls["nombreDelVisitante"].value,
      mensaje: this.comentarioForm.controls["comentarioDelVisitante"].value,
      fecha: new Date()
    }
    this.enviandoComentario = true;
    this.firebaseService.setDocumento("comentarios",  comentarios)
      .then(()=> { 
          this.comentarioForm.reset(); 
          this.enviandoComentario = false; 
          this.mensajeEnviado = true;
        })
      .catch(()=>console.error("Error al enviar comentario a firebase"));
  }

  ngOnInit() {
  }

}
