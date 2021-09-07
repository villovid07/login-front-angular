import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdministradorComponent } from './dash-administrador/dash-administrador.component';
import { AdministradorRoutingModule } from './administrador.routing';

@NgModule({
  declarations: [DashAdministradorComponent],
  imports: [CommonModule, AdministradorRoutingModule],
})
export class AdministradorModule {}
