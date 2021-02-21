import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './componentes/admin/admin.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TorneosComponent } from './componentes/torneos/torneos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [AdminComponent, NavbarComponent, TorneosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AdminModule { }
