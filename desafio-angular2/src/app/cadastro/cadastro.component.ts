import { Component } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cliente: any = [];
  BaseURL = "http://localhost:3000/clientes";

  constructor(private http: HttpClient) {
    //this.post();
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.cliente);
  }

  cadastro(formDado) {
    console.log("cadastro realizado!");
    this.post(formDado);
  }

  post(formDado) { 

   /* this.http.post(`${this.BaseURL}` / formDado)
      .subscribe(data => {
        this.cliente = data;
      })
      */
  }

}
