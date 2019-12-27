import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FirebaseService } from '../transversal/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  imagenFachadaClub:Observable<any>;
  constructor(private titleService:Title,
              private firebaseService:FirebaseService) { 

    this.titleService.setTitle("Club Philidor - Historia")
  }

  ngOnInit() {
    this.imagenFachadaClub = this.firebaseService.getMultimedia("historia", "fachada-club.jpg");
  }
}
