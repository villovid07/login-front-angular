import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cargando:boolean=false;
  hide:boolean=true;
  formActualizar:FormGroup;


  constructor( private fb :FormBuilder, 
    private _authService:AuthService,
    private _matSnackBar:MatSnackBar, 
    private _router: Router) {

    this.formActualizar= fb.group({
      contra:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  back(){
    window.history.back();
  }

  async actualizar(){
    if(this.formActualizar.valid){
      try {
          this.cargando=true;
          let actualizada = await this._authService.actualizarContra(this.formActualizar.value.contra).toPromise();
          this._matSnackBar.open('Contraseña actualizada exitosamente', 'cerrar');
          this.cargando= false;
          this._router.navigate(["/login"]);  
      } catch (error) {
        let mensaje ="Error al actualizar";
        if(error.error){
          if(error.error.mensaje){
            mensaje = error.error.mensaje;
          }
        }
        this.cargando=false;
        this._matSnackBar.open(mensaje, 'cerrar');
      }
    }
  }
}
