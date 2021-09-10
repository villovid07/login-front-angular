import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GeneroService } from 'src/app/shared/services/genero.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  frmRegister: FormGroup;
  lstGeneros: Array<any>;
  cargando: boolean = false;
  hide:boolean=true;

  constructor(
    fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _generoService: GeneroService,
    private _authService: AuthService,
    private _router:Router
  ) {
    this.lstGeneros = _generoService.darLstGeneros();
    this.frmRegister = fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        username: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        genero: ['', Validators.required],
        passwd: ['', Validators.required],
        repetir_passwd: ['', Validators.required],
      },
      { validator: passwordMatchValidator }
    );
  }

  get passwd() {
    return this.frmRegister.get('passwd');
  }
  get repetir_passwd() {
    return this.frmRegister.get('repetir_passwd');
  }

  onPasswordInput() {
    if (this.frmRegister.hasError('passwordMismatch'))
      this.repetir_passwd.setErrors([{ passwordMismatch: true }]);
    else this.repetir_passwd.setErrors(null);
  }

  ngOnInit(): void {
    //iniciar
  }

  get f() {
    return this.frmRegister.controls;
  }

  async registrar() {

    if(this.frmRegister.valid){
      try {
        this.cargando=true;
        let valor = this.frmRegister.value;
        let usuario ={
            nombre: valor.nombre,
            apellido: valor.apellido,
            genero:valor.genero,
            correo:valor.email,
            username: valor.username,
            contrasenia: valor.passwd
        }; 

        let registrar = await this._authService.registrarUsuario(usuario).toPromise();
        this.cargando=false;
        this._snackBar.open(registrar.mensaje, 'cerrar',{
          duration: 5000
        });
        this._router.navigate(["/login"]);
      } catch (error) {
        this.cargando=false;
        this._snackBar.open(error.error.mensaje, 'cerrar');
      }
    }
    
  }
}

/**
 *
 * Validador del password de la contraseña del usuario
 * @param formGroup
 * @returns
 */
export const passwordMatchValidator: ValidatorFn = (
  formGroup: FormGroup
): ValidationErrors | null => {
  console.log(formGroup.get('passwd').value);
  console.log(formGroup.get('repetir_passwd').value);
  if (formGroup.get('passwd').value === formGroup.get('repetir_passwd').value)
    return null;
  else return { passwordMismatch: true };
};
