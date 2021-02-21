import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      AngularFireModule.initializeApp(environment.firebase),   
      AngularFirestoreModule,
      AngularFireStorageModule
    ],
    providers: [
      AngularFirestore,
      AngularFireStorage
    ]
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
