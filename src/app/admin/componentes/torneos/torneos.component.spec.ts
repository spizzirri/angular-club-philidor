import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { TorneosService } from 'src/app/core/servicios/torneos.service';
import { environment } from 'src/environments/environment';

import { TorneosComponent } from './torneos.component';

describe('TorneosComponent', () => {
  let component: TorneosComponent;
  let fixture: ComponentFixture<TorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneosComponent ],
      imports: [ 
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),   
        AngularFirestoreModule,
        AngularFireStorageModule,
        CoreModule 
      ],
      providers: [
        FormBuilder, TorneosService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
