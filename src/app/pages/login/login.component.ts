import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;
  hide = true;

  constructor(
   private fb: FormBuilder
  ){

    this.frmLogin = this.fb.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
    });
  }

  get f() {
    return this.frmLogin.controls;
  }

  ngOnInit(): void {
    console.log("iniciado");
  }


  onSubmit(){
    if(this.frmLogin.valid){

    } else{

    }
    
  }

}
