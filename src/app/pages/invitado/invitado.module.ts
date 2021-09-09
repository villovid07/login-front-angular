import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { InvitadoRoutingModule } from './invitado.routing';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BienvenidoComponent],
  imports: [CommonModule, InvitadoRoutingModule, MatIconModule],
})
export class InvitadoModule {}
