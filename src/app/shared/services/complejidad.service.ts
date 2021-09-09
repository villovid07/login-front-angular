import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root',
})
export class ComplejidadService {

    ApiUrl: string;

    constructor(protected http: HttpClient){
        this.ApiUrl = environment.api;
    }

    darComplejidades():Observable<any>{
        let ruta = [this.ApiUrl, 'complejidades'].join('/');
        return this.http.get(ruta);
    }

    actualizarComplejidad(datos, id_complejidad):Observable<any>{
        let ruta = [this.ApiUrl, 'complejidades', id_complejidad].join('/');
        return this.http.put(ruta, datos);
    }

}