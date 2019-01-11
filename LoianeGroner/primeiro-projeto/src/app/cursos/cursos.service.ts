import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  /* Retorna lista de cursos  */
  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }

}
