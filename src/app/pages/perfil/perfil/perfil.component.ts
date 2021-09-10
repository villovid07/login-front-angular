import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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


  constructor( private fb :FormBuilder, private _authService:AuthService,private _matSnackBar:MatSnackBar) {

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
