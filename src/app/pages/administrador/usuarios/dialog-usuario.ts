
import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IDialogData } from "src/app/shared/interfaces/IDialogData";
import { AuthService } from "src/app/shared/services/auth.service";
import { ComplejidadService } from "src/app/shared/services/complejidad.service";

@Component({
    selector: 'dialog-usuario',
    templateUrl: 'dialog-usuario.html',
})
export class DialogUsuario {

    formEditar: FormGroup;
    lstComplejidades: Array<any>;
    lstPerfiles: Array<any>;

    constructor(
        public dialogRef: MatDialogRef<DialogUsuario>,
        @Inject(MAT_DIALOG_DATA) public data: IDialogData,
        public fb: FormBuilder, 
        public _complejidadService:ComplejidadService,
        public _authService:AuthService) {

        this.formEditar= fb.group({
            "perfil": ['', Validators.required],
            "complejidad": ['', Validators.required]
        });

        this.formEditar.controls['perfil'].setValue(data.id_perfil);
        this.formEditar.controls['complejidad'].setValue(data.id_complejidad);

        this.cargar();

    }

    onNoClick(): void {
        this.dialogRef.close({"cerrado":true});
    }

    async actualizar(){
        if(this.formEditar.valid){
            try {
                let actua = await this._authService.actualizarUsuario(this.formEditar.value, this.data.id_usuario).toPromise();
                this.dialogRef.close({"cerrado":false, "mensaje":"Registro actualizado"});
            } catch (error) {
                this.dialogRef.close({"cerrado":false, "error":true});
            }
        }

    }

    async cargar(){
        this.lstComplejidades = await this._complejidadService.darComplejidades().toPromise();
        this.lstPerfiles = await this._authService.darPerfiles().toPromise();
    }

}