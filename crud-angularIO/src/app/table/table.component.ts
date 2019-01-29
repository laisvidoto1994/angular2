import { Component, OnInit } from "@angular/core";

import { CrudService } from "../../crud.service";

@Component({
  selector: "table-component",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})

export class TableComponent implements OnInit {

  clients: any = [];

  constructor(public crudService: CrudService) { }
 
  ngOnInit() {
    this.getClients();
  }

  /* Mostra dados do json */
  getClients() {
    this.crudService.read().subscribe(
      data => {
        this.clients = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  /* Mostra um unico dado do json */
  trazerCliente(id, client) {
    this.crudService.search(id).subscribe(
      data => {
        this.clients = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  /* exclui dados do json */
  deleteClient(id, client) {
    this.crudService.delete(id).subscribe(
      data => {
        alert("Cliente " + client.nome + ", foi removido!");
        window.location.reload();
      },
      error => {
        console.log("ERROR: " + error)
      }
    );
  }

}
