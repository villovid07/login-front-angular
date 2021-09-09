import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.css'],
})
export class LayoutComponentComponent implements OnInit {
  links = [
    {
      name: 'Administrar usuarios',
      url: '/app/administrador/usuarios',
    },
    {
      name: 'Administrar complejidad',
      url: '/app/administrador/complejidad',
    }
  ];
  title = 'angular-material-example';

  constructor(private _authService: AuthService, private _router:Router) {

  }

  ngOnInit(): void {
    //iniciar pantalla
  }

  cerrarSesion(): void{
    this._authService.cerrarSesion();
    this._router.navigate(["/login"]);
  }

}
