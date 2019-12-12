import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Torneo } from './tournament';
import { TournamentService } from './tournament.service';
import { ScrollService } from '../scroll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit, AfterViewInit {

  torneosPhilidor:Array<Torneo>;
  torneosFAOGBA:Array<Torneo>;
  torneosInternacionales:Array<Torneo>;
  linkTorneoActual:string;
  mostrarSpinner:Boolean;
  constructor(private tournamentService:TournamentService, 
              private scrollService:ScrollService,
              private activatedRoute:ActivatedRoute) { 
    this.mostrarSpinner = false;
    this.torneosPhilidor = new Array<Torneo>();
    this.torneosFAOGBA = new Array<Torneo>();
    this.torneosInternacionales = new Array<Torneo>();
    this.tournamentService.obtenerTorneos()
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
