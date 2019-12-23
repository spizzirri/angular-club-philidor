import { Component, OnInit, OnDestroy } from '@angular/core';
import { CargadorDeScriptsService } from 'src/app/transversal/services/cargadorDeScripts.service.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visorpgn',
  templateUrl: './visorpgn.component.html',
  styleUrls: ['./visorpgn.component.css']
})
export class VisorpgnComponent implements OnInit, OnDestroy {

  constructor(private cargadorDeScriptsService: CargadorDeScriptsService,
              private titleService:Title) { 
    this.cargadorDeScriptsService.load('cbreplay');
    this.titleService.setTitle("Club Philidor - Partidas");
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    this.cargadorDeScriptsService.download();
  }
}
