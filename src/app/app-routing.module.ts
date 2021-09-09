import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponentComponent } from './containers/layout-component/layout-component.component';
import { LayoutSinComponent } from './containers/layout-sin/layout-sin.component';
import { LoginComponent } from './pages/login/login.component';
import { P404Component } from './pages/p404/p404.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/security/auth.guard';
import { Role } from './shared/services/role';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponentComponent,
    children: [
      {
        path: 'administrador',
        canActivate:[AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('./pages/administrador/administrador.module').then(
            (m) => m.AdministradorModule
          ),
      },
    ],
  },
  {
    path: 'app-invitado',
    component: LayoutSinComponent,
    children: [
      {
        path: 'invitado',
        canActivate:[AuthGuard],
        data: {
          role: Role.Invitado,
        },
        loadChildren: () =>
          import('./pages/invitado/invitado.module').then(
            (m) => m.InvitadoModule
          ),
      },
    ],
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: '**',
    component: P404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
