import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplejidadComponent } from './complejidad/complejidad.component';
import { DashAdministradorComponent } from './dash-administrador/dash-administrador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: DashAdministradorComponent,
  },
  {
    path: 'complejidad',
    component: ComplejidadComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
