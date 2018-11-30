
import { Component, OnInit } from '@angular/core';

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  title = "angular-project";
  clientes: any = [];
  cliente1: any = [];
  BaseURL = "http://localhost:3000/clientes";

  constructor(private http: HttpClient) {
    this.get();
  }

  /* requisição de trazer os dados */
  get() {
    this.http.get(this.BaseURL)
      .subscribe(data => {
        this.clientes = data;
      })
  }


  /* função de exclusão do dado da tabela pelo id */
  excluir(id) {

    const url = `${this.BaseURL}/${id}`;

    return this.http.delete(url)
      .subscribe(data => {
        alert('Usuário removido com sucesso!')
        window.location.reload();
      }, error => {
        alert('Não conseguiu excluir!')
      })
  }

  /* função de atualização do dado da tabela */
  atualizar(cliente) {
    this.cliente1.id = cliente.id;
     
    alert(this.cliente1.id);
  }
}
