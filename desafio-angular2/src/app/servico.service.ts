import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'

})
export class ServicoService {

  clientes: any = [];
  BaseURL = "http://localhost:3000/clientes";

  constructor() { }

  post(formDado) {

     
  }

}
