import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
//import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  /* definindo variavel para reseber os dados vindo pelo parametro */
  detalheProd: any;

  /* ActivatedRoute-> rota ativa, para obter os detalhes da rota, inclusive os parametros */
  constructor(
    private route: ActivatedRoute,
    public crudService: CrudService) {
    //this.detalheProd = this.route.snapshot.params;/* obtendo os parametros da rota */
  }


  ngOnInit() {
    /* ouvindo e obtendo os parametros */
    this.route.params.subscribe(
      (params: any) => {
        this.detalheProd = params;
        /*
         if(this.detalheProd.aceitaAnimal == true){
          this.detalheProd.aceitaAnimal = "Sim";
        }
        else if(this.detalheProd.aceitaAnimal == false){
          this.detalheProd.aceitaAnimal = "Não";
        }
         */
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
  atualizar(id, client) {
    //console.log("atualizado-> " + formulario);
    this.crudService.update(id, client).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.log("ERROR: " + error);
      }
    );
  }
  
  voltar(){

  }
}
