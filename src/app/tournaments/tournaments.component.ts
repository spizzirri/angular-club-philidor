import { Component, OnInit } from '@angular/core';
import { Torneo } from './tournament';
import { TournamentService } from './tournament.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  torneosPhilidor:Array<Torneo>;
  torneosFAOGBA:Array<Torneo>;
  torneosInternacionales:Array<Torneo>;
  linkTorneoActual:string;
  mostrarSpinner:Boolean;
  constructor(private tournamentService:TournamentService, 
              private sanitizer:DomSanitizer,
              private scrollService:ScrollService) { 
    this.mostrarSpinner = false;
    this.torneosPhilidor = new Array<Torneo>();
    this.torneosFAOGBA = new Array<Torneo>();
    this.torneosInternacionales = new Array<Torneo>();
    this.sanitizer = sanitizer;
    this.tournamentService.obtenerTorneos()
      .subscribe((data)=> {
        this.torneosPhilidor = data.philidor.map((torneo)=> { 
          return { 
            ...torneo, 
            link:this.sanitizer.bypassSecurityTrustResourceUrl(`https://chess-results.com/${torneo.link}.aspx?lan=2&art=1&wi=700&iframe=YES&css=2&lansel=YES`) }
          });
        
        this.torneosFAOGBA = data.faogba.map((torneo)=> { 
          return { 
            ...torneo, 
            link:this.sanitizer.bypassSecurityTrustResourceUrl(`https://chess-results.com/${torneo.link}.aspx?lan=2&art=1&wi=700&iframe=YES&css=2&lansel=YES`) }
          });
        this.torneosInternacionales = data.internacionales.map((torneo)=> { 
          return { 
            ...torneo, 
            link:this.sanitizer.bypassSecurityTrustResourceUrl(`https://chess-results.com/${torneo.link}.aspx?lan=2&art=1&wi=700&iframe=YES&css=2&lansel=YES`) }
          });  
        }
      );
  }

  setMostrarSpinner(estado:Boolean){
    this.mostrarSpinner = estado;
  }

  urlSafe(url:string):SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  cambiarIFrame(linkTorneoSeleccionado:string){
    this.setMostrarSpinner(true);
    this.linkTorneoActual = linkTorneoSeleccionado;
  }

  ngOnInit() {
    this.scrollService.setScrollTop();
  }

}
