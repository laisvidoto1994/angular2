
import { Component } from '@angular/core';

import { OutputPropertyComponent } from './output-property.component';
import { InputPropertyComponent } from './../input-property/input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] 
})

export class DataBindingComponent {

  url: string = 'http://loiane.training';
  urlImagem: string = 'http://lorempixel.com/400/200/cats/';

  cursoAngular: boolean = true;
  isMouseOver: boolean = false;// inicia evento como falso, para dizer que o mouse não esta em cima dele

  valorAtual: string = "";
  valorSalvo: string = "";
  nomeDoCurso: string = "Angular";
  valorInicial: number = 10;

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  /* função de click de botão */
  botaoClicado() {
    alert('botao clicado!');
  }

    /* função que captura os dados digitados na tela disparada pelo evento */
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  /* mostra o dado digitado apenas se eu clicar em enter(keyup.enter), ou se tirar o foco do campo(blur) */
  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  /* função que modifica o status do mouse como true e false, mouse em cima do texto ou não */
  // se colocar o mouse por cima ele se torna true, e quando tira ele se torna falso
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event){
    alert(event.novoValor);

  }

  constructor() { } 

}
