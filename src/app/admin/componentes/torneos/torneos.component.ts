import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  formulario:FormGroup;
  torneos:Array<any>

  constructor(private formBuilder:FormBuilder,
              private firebaseService:FirebaseService) {
    this.torneos = new Array<any>();
    this.construirFormulario();
    this.obtenerTorneos();
  }

  ngOnInit() {
  }

  public construirFormulario(){
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      link: ['', [Validators.required]],
      fecha:['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      organizador: ['', Validators.required]
    })
  }

  public guardarTorneo(event: Event){
    console.log(this.formulario);
    this.firebaseService.setDocumento("torneos", this.formulario.value);
    this.construirFormulario();
  }

  public obtenerTorneos(){
    this.firebaseService.getDocumentos("torneos")
      .subscribe((torneos)=> { this.torneos = torneos; console.log(torneos); });
  }

  public eliminarTorneo(idTorneo:string){
    this.firebaseService.deleteDocumento("torneos", idTorneo);
  }
}
