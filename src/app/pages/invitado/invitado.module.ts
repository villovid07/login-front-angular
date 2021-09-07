import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { InvitadoRoutingModule } from './invitado.routing';

@NgModule({
  declarations: [BienvenidoComponent],
  imports: [CommonModule, InvitadoRoutingModule],
})
export class InvitadoModule {}
