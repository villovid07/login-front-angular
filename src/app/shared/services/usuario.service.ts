import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    ApiUrl: string;

    constructor(protected http: HttpClient){
        this.ApiUrl = environment.api;
    }

    findAllUsuarios():Observable<any>{
        let ruta = [this.ApiUrl, 'all-usuarios'].join('/');
        return this.http.post(ruta, {"token": localStorage.getItem("TOKEN")});
    }
}