import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/transversal/services/firebase.service';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  comentarioForm:FormGroup;
  enviandoComentario:boolean;
  mensajeEnviado:boolean;

  constructor(private firebaseService:FirebaseService,
              private formBuild:FormBuilder) {

    this.enviandoComentario = false;
    this.mensajeEnviado = false;
    this.comentarioForm = this.formBuild.group({
      comentarioDelVisitante:'',
      nombreDelVisitante:''
    });
  }

  ngOnInit() {
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
}
