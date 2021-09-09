import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComplejidadService } from 'src/app/shared/services/complejidad.service';

@Component({
  selector: 'app-complejidad',
  templateUrl: './complejidad.component.html',
  styleUrls: ['./complejidad.component.css'],
})
export class ComplejidadComponent implements OnInit {
  lstComplejidades: Array<any>;
  cargando: boolean = false;
  complejidadSel: number;
  formComplejidad: FormGroup;

  constructor(
    private _complejidadService: ComplejidadService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.formComplejidad = fb.group({
      longitud_minima: ['', Validators.required],
      ctrl_reutilizacion: ['', Validators.required],
      factor_reutilizacion: ['', Validators.required],
      ctrl_similitud: ['', Validators.required],
      factor_similitud: ['', Validators.required],
      ctrl_caracteres: ['', Validators.required],
      requiere_mayus: ['', Validators.required],
      requiere_minusculas: ['', Validators.required],
      requiere_numeros: ['', Validators.required],
      requiere_especiales: ['', Validators.required],
      control_vencimiento: ['', Validators.required],
      factor_vencimiento: ['', Validators.required],
      ctrl_reintentos_fallidos: ['', Validators.required],
      factor_reintentos_fallidos: ['', Validators.required],
      factor_bloqueo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarComplejidades();
  }

  async cargarComplejidades() {
    try {
      this.lstComplejidades = await this._complejidadService
        .darComplejidades()
        .toPromise();
      console.log(this.lstComplejidades);
    } catch (error) {
      let mensaje = 'Error en el servidor';
      if (error.error) {
        if (error.error.mensaje) {
          mensaje = error.error.mensaje;
        }
      }
      this._snackBar.open(mensaje, 'cerrar', {
        duration: 3000,
      });
    }
  }

  cambiar(event) {
    this.complejidadSel = event;

    let encontrado = this.lstComplejidades.find(item => item.id_complejidad == this.complejidadSel);

    this.formComplejidad.controls["longitud_minima"].setValue(encontrado.longitud_minima); 
    this.formComplejidad.controls["ctrl_reutilizacion"].setValue(encontrado.ctrl_reutilizacion); 
    this.formComplejidad.controls["factor_reutilizacion"].setValue(encontrado.factor_reutilizacion); 
    this.formComplejidad.controls["ctrl_similitud"].setValue(encontrado.ctrl_similitud); 
    this.formComplejidad.controls["factor_similitud"].setValue(encontrado.factor_similitud); 
    this.formComplejidad.controls["ctrl_caracteres"].setValue(encontrado.ctrl_caracteres); 
    this.formComplejidad.controls["requiere_mayus"].setValue(encontrado.requiere_mayus); 
    this.formComplejidad.controls["requiere_minusculas"].setValue(encontrado.requiere_minusculas); 
    this.formComplejidad.controls["requiere_numeros"].setValue(encontrado.requiere_numeros); 
    this.formComplejidad.controls["requiere_especiales"].setValue(encontrado.requiere_especiales); 
    this.formComplejidad.controls["control_vencimiento"].setValue(encontrado.control_vencimiento); 
    this.formComplejidad.controls["factor_vencimiento"].setValue(encontrado.factor_vencimiento); 
    this.formComplejidad.controls["ctrl_reintentos_fallidos"].setValue(encontrado.ctrl_reintentos_fallidos); 
    this.formComplejidad.controls["factor_reintentos_fallidos"].setValue(encontrado.factor_reintentos_fallidos); 
    this.formComplejidad.controls["factor_bloqueo"].setValue(encontrado.factor_bloqueo);

  }

  reiniciar(){
    this.complejidadSel= null;
    this.formComplejidad.reset({});
  }


  async actualizar(){
    try {
      if(this.formComplejidad.valid){
        this.cargando=true;
        let actualizada = await this._complejidadService.actualizarComplejidad( this.formComplejidad.value, this.complejidadSel).toPromise(); 
        this._snackBar.open(actualizada.mensaje, 'cerrar',{
          duration:5000
        })   
        this.cargando=false;
      }
      
    } catch (error) {
      let mensaje ="Error en el servicio de actualizacion"
      if(error.error){
        if(error.error.mensaje){
            mensaje = error.error.mensaje;
        }
      }
      this._snackBar.open(mensaje, 'cerrar',{
        duration:3000
      })
    }
  }
}
