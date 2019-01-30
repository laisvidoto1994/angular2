import { Component, OnInit } from "@angular/core";

import { CrudService } from "../../crud.service";

@Component({
  selector: "table-component",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})

export class TableComponent implements OnInit {

  clients: any = [];
  produtos: any = [];

  filteredTodos: any = [];
  currentPage = 1;
  itemsPerPage = 1;

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.getClients();
  }

  /* Mostra TODOS os dados do json */
  getClients() {

    this.crudService
      .read().subscribe(
        data => { 
          this.produtos = data;
         // console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  /* Mostra UM UNICO dado do json */
  trazerCliente(id, client) {

    this.crudService
      .search(id).subscribe(
        data => { 
          this.produtos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );

  }

  /* exclui dados do json */
  deleteClient(id, client) {

    this.crudService
      .delete(id).subscribe(
        data => {
          alert("Cliente " + client.nome + ", foi removido!");
          window.location.reload();
        },
        error => {
          console.log("ERROR: " + error)
        }
      );
  }

  /* paginação */
  pageChanged() {

    var begin = ((this.currentPage - 1) * this.itemsPerPage);
    var end = begin + this.itemsPerPage;

    this.filteredTodos = this.produtos.slice(begin, end);
  };

}
