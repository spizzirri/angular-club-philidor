import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { environment } from 'src/environments/environment';

import { MensajeComponent } from './mensaje.component';

describe('MensajeComponent', () => {
  let component: MensajeComponent;
  let fixture: ComponentFixture<MensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeComponent ],
      imports:[
        AngularFireModule.initializeApp(environment.firebase),   
        AngularFirestoreModule,
        AngularFireStorageModule,
        ReactiveFormsModule
      ],
      providers:[
        FirebaseService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
