import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollService } from 'src/app/core/servicios/scroll.service';
import { TorneosService } from 'src/app/core/servicios/torneos.service';
import { SanitizerPipe } from 'src/app/shared/pipes/sanitizer.pipe';
import { environment } from 'src/environments/environment';

import { TorneosComponent } from './torneos.component';

describe('TorneosComponent', () => {
  let component: TorneosComponent;
  let fixture: ComponentFixture<TorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneosComponent, SanitizerPipe ],
      imports:[
        AngularFireModule.initializeApp(environment.firebase),   
        AngularFirestoreModule,
        AngularFireStorageModule,
        RouterTestingModule.withRoutes([])
      ],
      providers:[
        TorneosService,
        ScrollService
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
