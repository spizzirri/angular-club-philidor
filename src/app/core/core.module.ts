import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './servicios/firebase.service';
import { CargadorDeScriptsService } from './servicios/cargadorDeScripts.service';
import { ScrollService } from './servicios/scroll.service';
import { TorneosService } from './servicios/torneos.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    FirebaseService,
    CargadorDeScriptsService,
    ScrollService,
    TorneosService
  ]
})
export class CoreModule { }
