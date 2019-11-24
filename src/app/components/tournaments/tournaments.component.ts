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

  torneos:Array<Torneo>;
  linkTorneoActual:string;

  constructor(private tournamentService:TournamentService, private sanitizer:DomSanitizer) { 
    this.torneos = new Array<Torneo>();
    this.sanitizer = sanitizer;
    this.tournamentService.obtenerTorneos()
      .subscribe((data:Array<Torneo>)=> {
        this.torneos = data.map((torneo)=> { 
          return { 
            ...torneo, 
            link:this.sanitizer.bypassSecurityTrustResourceUrl(`https://chess-results.com/${torneo.link}.aspx?lan=2&art=1&wi=700&iframe=YES&css=2&lansel=YES`) }})
      });
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
