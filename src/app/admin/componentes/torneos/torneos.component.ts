import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TorneosService } from 'src/app/core/servicios/torneos.service';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  formulario:FormGroup;
  torneos:Array<any>
  organizadores: Array<string> = ["Philidor", "FAOGBA", "Resto del mundo"];

  constructor(private formBuilder:FormBuilder,
              private torneosService:TorneosService) {
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
    this.torneosService.guardarTorneo(this.formulario.value);
    this.construirFormulario();
  }

  public obtenerTorneos(){
    this.torneosService.obtenerTorneos()
      .subscribe((torneos)=> this.torneos = torneos);
  }

  public eliminarTorneo(idTorneo:string){
    this.torneosService.eliminarTorneo(idTorneo);
  }
}
