import { Component, OnInit } from "@angular/core";
import { CrudService } from "../../crud.service";

@Component({
  selector: "table-component",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  // lista de produtos que vem do service
  produtos: any = [];

  // paginação
  filteredTodos: any = [];
  currentPage = 1;
  itemsPerPage = 1;

  // resultado da busca
  resultadoBusca: any = [];

  // validação de exclusão
  excluirValidacao: boolean = false;

  constructor(
    public crudService: CrudService
    ) {}

  ngOnInit() {
    this.carregarListaProdutos();
  }

  /*
  * botão de busca de dados pelo input
  */
  pesquisarProdutos(dado) {
    console.log("digitado-> " + dado.value.nomeHospedagem);
    this.resultadoBusca = [];

    for (let index = 0; index < this.produtos.length; index++) {
      if (this.produtos[index].nomeHospedagem === dado.value.nomeHospedagem) {
        this.resultadoBusca = this.produtos[index].nomeHospedagem;
      }
    }
    if (this.resultadoBusca == "") {
      this.resultadoBusca = "Nenhum hotel foi encontrado com esse nome!";
    }
  }

  /*
  * Mostra TODOS os dados do json
  */
  carregarListaProdutos() {
    this.crudService.read().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*
  * Mostra UM UNICO dado do json
  */
  detalharProduto(id, client) {
    this.crudService.search(id).subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*
  * exclui dados do json
  */
  excluirProduto(id, client) {
    this.crudService.delete(id).subscribe(
      (data) => {
        this.excluirValidacao = true;
        window.location.reload();
      },
      (error) => {
        console.log("ERROR: " + error);
      }
    );
  }

  /*
  * logica da paginação
  */
  pageChanged() {
    var begin = (this.currentPage - 1) * this.itemsPerPage;
    var end = begin + this.itemsPerPage;
    this.filteredTodos = this.produtos.slice(begin, end);
  }
}
