import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  lstgeneros: Array<any>;
  constructor() {
    this.lstgeneros = [
      { codigo: 'M', descripcion: 'Masculino' },
      { codigo: 'F', descripcion: 'Femenino' },
    ];
  }

  darLstGeneros() {
    return this.lstgeneros;
  }
}
