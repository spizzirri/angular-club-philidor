import { Component, OnInit } from '@angular/core';
import { Torneo } from './tournament';
import { TournamentService } from './tournament.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  torneosPhilidor:Array<Torneo>;
  torneosFAOGBA:Array<Torneo>;
  linkTorneoActual:string;

  constructor(private tournamentService:TournamentService, private sanitizer:DomSanitizer) { 
    this.torneosPhilidor = new Array<Torneo>();
    this.torneosFAOGBA = new Array<Torneo>();
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
        }
      );
  }

  urlSafe(url:string):SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  cambiarIFrame(linkTorneoSeleccionado:string){
    this.linkTorneoActual = linkTorneoSeleccionado;
  }

  ngOnInit() {
  }

}
