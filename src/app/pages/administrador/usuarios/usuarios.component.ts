import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuario } from './dialog-usuario';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lstUsuario: Array<any>;
  cargando: boolean = false;


  constructor(
    private _snackBar: MatSnackBar,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.cargarDatos();
  }

  async cargarDatos() {
    try {
      this.cargando = true;
      this.lstUsuario = await this._usuarioService.findAllUsuarios().toPromise();
      console.log(this.lstUsuario)
      this.cargando = false;
    } catch (error) {
      let mensaje = "Error en la carga de usuarios"
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

  async editar(item) {
    const dialogRef = this.dialog.open(DialogUsuario, {
      width: '500px',
      data: {
        nombre: item.nombre,
        id_usuario: item.id_usuario,
        id_perfil: item.id_perfil,
        id_complejidad: item.id_complejidad
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result.cerrado) {

        if (result.error) {
            this._snackBar.open("No se pudo realizar la actualizacion del usuario", "close", {
              duration:3000
            });
        } else {
          this.cargarDatos();
          this._snackBar.open(result.mensaje, "close", {
            duration:3000
          });
        }

      }


    });
  }

}



