import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdministradorComponent } from './dash-administrador/dash-administrador.component';
import { AdministradorRoutingModule } from './administrador.routing';
import { ComplejidadComponent } from './complejidad/complejidad.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogUsuario } from './usuarios/dialog-usuario';
import { DigitOnlyModule } from '@uiowa/digit-only';

@NgModule({
  declarations: [
    DashAdministradorComponent,
    ComplejidadComponent,
    UsuariosComponent,
    DialogUsuario
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    DigitOnlyModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdministradorModule {}
