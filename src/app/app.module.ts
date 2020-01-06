import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './transversal/componentes/navbar/navbar.component';
import { HomeComponent } from './home/componentes/home/home.component';
import { PhotosComponent } from './home/componentes/photos/photos.component';
import { TorneosComponent } from './torneos/componentes/torneos/torneos.component';
import { RankingComponent } from './ranking/componentes/ranking/ranking.component';
import { HistoriaComponent } from './historia/componentes/historia/historia.component';
import { TableComponent } from './transversal/componentes/table/table.component';
import { RankingService } from './ranking/servicios/ranking.service';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './home/servicios/noticias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChesscoinComponent } from './chesscoin/componentes/chesscoin/chesscoin.component';
import { BorrarespaciosPipe } from './transversal/pipes/borrarespacios.pipe';
import { SanitizerPipe } from './transversal/pipes/sanitizer.pipe';
import { NoticiaComponent } from './home/componentes/noticia/noticia.component';
import { ContactoComponent } from './contacto/componentes/contacto/contacto.component';
import { JugarComponent } from './jugar/componentes/jugar/jugar.component';
import { TacticaComponent } from './tactica/componentes/tactica.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { MensajeComponent } from './transversal/componentes/mensaje/mensaje.component';
import { StoragePipe } from './transversal/pipes/storage.pipe';
import { AcordeonComponent } from './torneos/componentes/acordeon/acordeon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    TorneosComponent,
    RankingComponent,
    HistoriaComponent,
    TableComponent,
    ChesscoinComponent,
    NoticiaComponent,
    ContactoComponent,
    BorrarespaciosPipe,
    SanitizerPipe,
    JugarComponent,
    TacticaComponent,
    MensajeComponent,
    StoragePipe,
    AcordeonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    NoticiasService,
    RankingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
