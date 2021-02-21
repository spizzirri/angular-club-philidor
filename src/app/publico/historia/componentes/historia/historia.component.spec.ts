import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Title } from '@angular/platform-browser';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { environment } from 'src/environments/environment';

import { HistoriaComponent } from './historia.component';

describe('HistoryComponent', () => {
  let component: HistoriaComponent;
  let fixture: ComponentFixture<HistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaComponent ],
      imports:[
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule
      ],
      providers:[
        Title,
        FirebaseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
