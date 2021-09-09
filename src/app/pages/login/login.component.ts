import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  hide = true;
  cargando = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _authService: AuthService, private _localService: LocalService, 
    private _router:Router) {
    this.frmLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.frmLogin.controls;
  }

  ngOnInit(): void {
    console.log('iniciado');
  }

  async onSubmit() {
    if (this.frmLogin.valid) {
      try {
        this.cargando = true;
        let autenticado = await this._authService.login(this.frmLogin.value.username, this.frmLogin.value.password);
        console.log(autenticado);
        this._router.navigate([autenticado["pantalla"]]);
        this.cargando=false;
      } catch (error) {

        let mensaje="Error de autenticación";
        if(error.error){
          if(error.error.complejidad){

            let reslocal = this._localService.modificarIntentos(this.frmLogin.value.username);
            mensaje = await this.validarBloqueo(this.frmLogin.value.username, reslocal["intentos"], error.error.complejidad);
          } else {
            mensaje=error.error.mensaje;
          }
        }
        this._snackBar.open(mensaje, 'cerrar',{
          duration:3000
        });
        this.cargando=false;
      }
      
    }
  }

  async validarBloqueo(username, intentos, complejidad){

    let mensaje= "";
    try {
      let bloqueo = await this._authService.validarBloqueo({"username": username, "id_complejidad": complejidad, "intentos":intentos}).toPromise();
      mensaje= bloqueo["mensaje"];
      
    } catch (error) {
      mensaje ="Error en el servidor";
    }

    return mensaje;
  }





}
