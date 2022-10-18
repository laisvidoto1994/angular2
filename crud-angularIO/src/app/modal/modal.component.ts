import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('operacao') operacao: string = '';

  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
    this.operacao = 'cadastrar';
  }

  naoCadastrar(){
    this.operacao = '';
  }
}
