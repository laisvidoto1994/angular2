import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  /* validação do envio de e-mail */
  validacao: boolean = false;

  constructor(public crudService: CrudService) { }

  ngOnInit() { }

  enviarDado(form) {

    this.crudService.create2(form.value).subscribe(
      data => {
        console.log(data);
        this.validacao = true;
        setTimeout(() => location.reload(), 2000);
      },
      error => {
        console.log(error);
      }
    );

  }

  cancela() {
    this.validacao = false;
  }

}
