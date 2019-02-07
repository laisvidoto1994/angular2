import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { CrudService } from "../../crud.service";

@Component({
  selector: 'details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  detalheProd: any;

  constructor(private route: ActivatedRoute) {
    this.detalheProd = this.route.snapshot.params;
    console.log(this.detalheProd);
  }

  ngOnInit() {

  }

  /* validacao do Check para habilitar edição dos dados */
  validacaoSwitch(dados) {
    // console.log("dado-> " + dados);
  }

  /* atualizar dados cadastrados para o atual */
  atualizar(formulario) {
    console.log("atualizado-> " + formulario);
  }

}
