import { Component, OnInit } from '@angular/core';

import {CrudService} from '../../crud.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})

export class FormCreateComponent{
  constructor(public crudService: CrudService) { }
  
  createClient(form){
      this.crudService.create(form.value).subscribe(
        data => {
        window.location.reload();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}


