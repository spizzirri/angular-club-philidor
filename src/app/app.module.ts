import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HistoryComponent } from './components/history/history.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { PlayerComponent } from './components/player/player.component';
import { TableComponent } from './components/table/table.component';
import { RankingService } from './services/ranking.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';
import { FormsModule } from '@angular/forms';
import { EscuelitaComponent } from './components/escuelita/escuelita.component';
import { ChesscoinComponent } from './chesscoin/chesscoin.component';
import { BorrarespaciosPipe } from './components/home/borrarespacios.pipe';
import { SanitizerPipe } from './sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    TournamentsComponent,
    RankingComponent,
    HistoryComponent,
    BigCardComponent,
    SmallCardComponent,
    PlayerComponent,
    TableComponent,
    EscuelitaComponent,
    ChesscoinComponent,
    BorrarespaciosPipe,
    SanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NewsService,
    RankingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
