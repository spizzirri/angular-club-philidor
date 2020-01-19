import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  formulario:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.construirFormulario();
  }

  ngOnInit() {
  }

  public construirFormulario(){
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      link: ['', [Validators.required]],
      fechaInicio:['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      organizador: ['', Validators.required]
    })
  }

  public guardarTorneo(event: Event){
    console.log(this.formulario);
  }
}
