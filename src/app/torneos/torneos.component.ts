import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Torneo } from './torneo';
import { TorneosService } from './torneos.service';
import { ScrollService } from '../scroll.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit, AfterViewInit {

  torneosPhilidor:Array<Torneo>;
  torneosFAOGBA:Array<Torneo>;
  torneosInternacionales:Array<Torneo>;
  linkTorneoActual:string;
  mostrarSpinner:Boolean;
  constructor(private torneosService:TorneosService, 
              private scrollService:ScrollService,
              private activatedRoute:ActivatedRoute,
              private titleService:Title) {
    this.titleService.setTitle("Club Philidor - Torneos")
    this.mostrarSpinner = false;
    this.torneosPhilidor = new Array<Torneo>();
    this.torneosFAOGBA = new Array<Torneo>();
    this.torneosInternacionales = new Array<Torneo>();
    this.torneosService.obtenerTorneos()
      .subscribe((data)=> {
        this.torneosPhilidor = data.philidor;
        this.torneosFAOGBA = data.faogba;
        this.torneosInternacionales = data.internacionales;
        }
      );
  }

  setMostrarSpinner(estado:Boolean){
    this.mostrarSpinner = estado;
  }

  ngAfterViewInit(){
   
  }

  ngOnInit() {
    this.scrollService.setScrollTop();
    this.activatedRoute
        .paramMap
          .subscribe((data:any) => {
            if(data.params.idTorneo){
              this.linkTorneoActual = `https://chess-results.com/${data.params.idTorneo}.aspx?lan=2&art=1&wi=700&iframe=YES&css=2&lansel=YES`;
              this.setMostrarSpinner(true);
              this.scrollService.setScrollTop("chessresult");
            }
          });
  }

}
