
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {

  darJornadaByDate(fecha :Date):string {
    var curHr = fecha.getHours()
    
    if (curHr < 12) {
      return "Buenos dias";
    } else if (curHr < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }  

  }

}
