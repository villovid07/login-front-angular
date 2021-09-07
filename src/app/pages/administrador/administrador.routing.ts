import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAdministradorComponent } from './dash-administrador/dash-administrador.component';

const routes: Routes = [
  {
    path: '',
    component: DashAdministradorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
