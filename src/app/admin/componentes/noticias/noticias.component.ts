import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  formulario:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.construirFormulario();
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

  public guardarNoticia(event: Event){
    console.log(this.formulario.value);
  }
}
