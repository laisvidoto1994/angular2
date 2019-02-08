import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { Subscription } from 'rxjs/Rx';

import { CrudService } from "../../crud.service";

@Component({
  selector: 'details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  /* definindo variavel para reseber os dados vindo pelo parametro */
  detalheProd: any;

  /* ActivatedRoute-> rota ativa, para obter os detalhes da rota, inclusive os parametros */
  constructor(private route: ActivatedRoute) {
    //this.detalheProd = this.route.snapshot.params;/* obtendo os parametros da rota */ 
  }


  ngOnInit() {
    /* ouvindo e obtendo os parametros */
    this.route.params.subscribe(
      (params: any) => {
        this.detalheProd = params;
      }
    );
  }

  /* 
  * validacao do Check para habilitar edição dos dados
  */
  validacaoSwitch(dados) {
    // console.log("dado-> " + dados);
  }

  /* 
  * atualizar dados cadastrados para o atual 
  */
  atualizar(formulario) {
    console.log("atualizado-> " + formulario);
  }

}
