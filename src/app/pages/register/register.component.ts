import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneroService } from 'src/app/shared/services/genero.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  frmRegister: FormGroup;
  lstGeneros: Array<any>;
  cargando: boolean = true;

  constructor(
    fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _generoService: GeneroService
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
            Validators.pattern('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$'),
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

  ngOnInit(): void {}

  get f() {
    return this.frmRegister.controls;
  }

  registrar() {}
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
