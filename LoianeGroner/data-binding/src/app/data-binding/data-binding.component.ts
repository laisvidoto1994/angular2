import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
