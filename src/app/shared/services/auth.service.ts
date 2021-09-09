import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    ApiUrl: string;
    isLogin = false;
    roleAs: string;

    constructor(protected http: HttpClient){
        this.ApiUrl = environment.api;
    }

    registrarUsuario( usuario ): Observable<any>{
        let ruta = [this.ApiUrl, 'registro'].join('/');
        return this.http.post(ruta, usuario);
    }

    login( username: string , password: string){

        return new Promise(async (resolve, reject)=>{

            try {
                let ruta = [this.ApiUrl, "login"].join('/');
                let resultado =await this.http.post(ruta,{'username': username, 'password': password}).toPromise();  
                if(resultado){
                   console.log(resultado);
                   localStorage.setItem("PERFIL", resultado["perfil"]);
                   localStorage.setItem("TOKEN", resultado["token"]);
                   this.isLogin= true;
                } 
                resolve({"isLogin": this.isLogin, "pantalla":resultado["pantalla_inicio"]}); 
            } catch (error) {
               reject(error);
            }

        })

    }


    validarBloqueo(datos): Observable<any>{
        let ruta = [this.ApiUrl, 'validarBloqueo'].join('/');
        return this.http.post(ruta, datos);
    }

    getRole(){
        return localStorage.getItem("PERFIL");
    }

    isLoggedIn(){
        let token = localStorage.getItem("TOKEN");
        if(token){
            return true;
        }
        return false;
    }

    darInfousuario():Observable<any>{
        let token = localStorage.getItem("TOKEN");
        let ruta = [this.ApiUrl, 'dar-info-usuario'].join('/');
        return this.http.post(ruta, {"token":token});
    }

    cerrarSesion(){
        localStorage.removeItem("PERFIL");
        localStorage.removeItem("TOKEN");
    }


}
