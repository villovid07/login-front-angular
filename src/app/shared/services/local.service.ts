import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {

    modificarIntentos(usuario){

        let retorno ={};
        var intentos = localStorage.getItem('intentos');

        var arreglo=null;
        if(!intentos){
            arreglo = new Array();    
        } else {
            arreglo = JSON.parse(intentos);
        }
        
        let iUsu = arreglo.find( item=> item.usuario == usuario);

        if(iUsu){
            iUsu.intentos = iUsu.intentos+1;
            retorno =iUsu;
        } else {
            let aux ={
                "usuario": usuario,
                "intentos": 1 
            }
            arreglo.push(aux);
            retorno =aux;
        }
        localStorage.setItem('intentos', JSON.stringify(arreglo));
        return retorno;
    }

    eliminarusuario(usuario){
        var intentos = localStorage.getItem('intentos');
        var arreglo = JSON.parse(intentos);
        let iUsu = arreglo.find( item=> item.usuario == usuario);
        if(iUsu){
            iUsu.intentos =0;
        }
    }

}
