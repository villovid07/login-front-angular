import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HelpersService } from 'src/app/shared/services/helpers.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  nombre:string;
  fecha:string;
  jornada:string;

  constructor(private _snackBar: MatSnackBar, private _authService: AuthService, private _helpersService: HelpersService) {

  }

  async ngOnInit() {
    try {
      let datos = await this._authService.darInfousuario().toPromise();  
      this.nombre= datos["nombre"];
      this.fecha= datos["fecha_ultimo_login"];
      this.jornada = this._helpersService.darJornadaByDate(new Date());

    } catch (error) {
      let mensaje= "Error en el servicio";
      if(error.error){
        if(error.error.mensaje){
          mensaje= error.error.mensaje;
        }
      }
      this._snackBar.open(mensaje,"cerrar",{
        "duration":5000
      })
    }
  }

}
