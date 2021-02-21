import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';

import { TorneosService } from './torneos.service';

describe('TorneosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireStorageModule
    ],
    providers:[
      FirebaseService
    ]
  }));

  it('should be created', () => {
    const service: TorneosService = TestBed.get(TorneosService);
    expect(service).toBeTruthy();
  });
});
