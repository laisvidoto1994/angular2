import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})

export class FormCreateComponent {

  router: Router;
  validacao: boolean = false;
  files: FileList;
  base64textString: String = "";

  constructor(public crudService: CrudService, router: Router) {
    this.router = router;
  }

  onChange(evt) {

    let files = evt.target.files;
    let file = files[0];

    if (files && file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      return this.base64textString;
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  /* funcao de cadastro de novos produtos */
  cadastrar(form) {

    let teste = form.value;

    console.log(teste);
    console.log(teste.imagem);

    teste.imagem = this.base64textString;

    this.crudService.create(teste).subscribe(
      data => {
        console.log(data);
        //mostrar o alert da menssagem
        this.validacao = true;
        //navegue até á pagina inicial
        //setTimeout(() => this.router.navigate(['/']), 4000); 
      },
      error => {
        console.log(error);
      }
    );

  }

  /* função de redirecionamento para pagina inicial */
  redirecionar() {
    this.router.navigate(['/']);
  }


}



