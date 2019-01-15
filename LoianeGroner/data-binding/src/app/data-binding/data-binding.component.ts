
import { Component, OnInit } from '@angular/core';

import { OutputPropertyComponent } from './output-property.component';
import { InputPropertyComponent } from './../input-property/input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] 
})

export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  urlImagem: string = 'http://lorempixel.com/400/200/cats/';

  cursoAngular: boolean = true;
  isMouseOver: boolean = false;

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

  botaoClicado() {
    alert('botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event){
    alert(event.novoValor);

  }

  constructor() { }

  ngOnInit() {
  }

}
