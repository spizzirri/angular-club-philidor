import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './componentes/table/table.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BorrarespaciosPipe } from './pipes/borrarespacios.pipe';
import { SanitizerPipe } from './pipes/sanitizer.pipe';
import { StoragePipe } from './pipes/storage.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    MensajeComponent,
    NavbarComponent,
    BorrarespaciosPipe,
    SanitizerPipe,
    StoragePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TableComponent,
    MensajeComponent,
    NavbarComponent,
    BorrarespaciosPipe,
    SanitizerPipe,
    StoragePipe
  ]
})
export class SharedModule { }
