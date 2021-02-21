import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Title } from '@angular/platform-browser';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { environment } from 'src/environments/environment';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoComponent ],
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
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
