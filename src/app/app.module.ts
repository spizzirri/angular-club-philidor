import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TorneosComponent } from './torneos/torneos.component';
import { RankingComponent } from './ranking/ranking.component';
import { HistoryComponent } from './history/history.component';
import { TableComponent } from './components/table/table.component';
import { RankingService } from './ranking/ranking.service';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './services/noticias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChesscoinComponent } from './chesscoin/chesscoin.component';
import { BorrarespaciosPipe } from './home/borrarespacios.pipe';
import { SanitizerPipe } from './sanitizer.pipe';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VisorpgnComponent } from './components/visorpgn/visorpgn.component';
import { JugarComponent } from './jugar/jugar.component';
import { TacticaComponent } from './tactica/tactica.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { StoragePipe } from './storage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    TorneosComponent,
    RankingComponent,
    HistoryComponent,
    TableComponent,
    ChesscoinComponent,
    NoticiaComponent,
    ContactoComponent,
    BorrarespaciosPipe,
    SanitizerPipe,
    VisorpgnComponent,
    JugarComponent,
    TacticaComponent,
    MensajeComponent,
    StoragePipe,
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
