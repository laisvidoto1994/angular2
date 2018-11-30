import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  id: string;
  BaseURL = "http://localhost:3000/clientes";
  cliente: any = [];


  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }

  ngOnInit() {

    //const chave = this.route.params.value.id;
    //console.log(chave);
    this.get();
  }

  get() {
    /*
    return this.http.get(`${this.BaseURL}/?id=${id}`)
      .subscribe(data => {
        this.cliente = data;
      })
      */
  }

}
