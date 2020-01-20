import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/componentes/home/home.component';
import { PhotosComponent } from './home/componentes/photos/photos.component';
import { TorneosComponent } from './torneos/componentes/torneos/torneos.component';
import { RankingComponent } from './ranking/componentes/ranking/ranking.component';
import { HistoriaComponent } from './historia/componentes/historia/historia.component';
import { RankingService } from './ranking/servicios/ranking.service';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './home/servicios/noticias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChesscoinComponent } from './chesscoin/componentes/chesscoin/chesscoin.component';
import { NoticiaComponent } from './home/componentes/noticia/noticia.component';
import { ContactoComponent } from './contacto/componentes/contacto/contacto.component';
import { JugarComponent } from './jugar/componentes/jugar/jugar.component';
import { TacticaComponent } from './tactica/componentes/tactica.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AcordeonComponent } from './torneos/componentes/acordeon/acordeon.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    TorneosComponent,
    RankingComponent,
    HistoriaComponent,
    ChesscoinComponent,
    NoticiaComponent,
    ContactoComponent,
    JugarComponent,
    TacticaComponent,
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
    AngularFireStorageModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    NoticiasService,
    RankingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
