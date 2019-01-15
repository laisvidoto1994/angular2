import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs: ['nomeCurso:nome']
})

export class InputPropertyComponent implements OnInit {

  /* recebendo parametros de outro componente, como parametro chamado nome */
  @Input('nome') nomeCurso: string = "";

  constructor() { }

  ngOnInit() {
  }

}
