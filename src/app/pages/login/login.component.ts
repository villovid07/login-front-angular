import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  hide = true;
  cargando = true;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
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

  onSubmit() {
    if (this.frmLogin.valid) {
      this.cargando = true;
    }
  }
}

//this._snackBar.open('Se ha presentado un error ', 'sisa ');
