import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  timeControl:string

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => { this.timeControl = params.get('type') }
    )
  }

}
