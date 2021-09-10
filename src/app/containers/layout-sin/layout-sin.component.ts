import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-layout-sin',
  templateUrl: './layout-sin.component.html',
  styleUrls: ['./layout-sin.component.css']
})
export class LayoutSinComponent implements OnInit {

  constructor(

    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    //iniciar metodo 
  }

  cerrarSesion(): void{
      this._authService.cerrarSesion();
      this._router.navigate(["/login"]);
  }

  perfil():void{
    this._router.navigate(["/perfil"]);
  }

}
