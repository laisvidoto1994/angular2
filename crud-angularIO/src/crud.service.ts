import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CrudService {

    constructor(private http: HttpClient) { }

    configUrl = "http://localhost:3000/produtos";

    /* Leitura dos dados */
    read() {
        return this.http.get(this.configUrl)
    }

    /* procurar dos dados */
    search(id) {
        return this.http.get(`${this.configUrl}/${id}`)
    }

    /* Criação dos dados */
    create(client) {
        return this.http.post(this.configUrl, client)
    }

    /* Atualização dos dados do json */
    update(id, client) {
        return this.http.put(`${this.configUrl}/${id}`, client);
    }

    /* Exclusão dos dados */
    delete(id) {
        return this.http.delete(`${this.configUrl}/${id}`)
    }

    /**********************************/
    /*      service de menssagem      */
    /**********************************/
    configUrl2 = "http://localhost:3000/menssagens";

    /* Criação dos dados */
    create2(client) {
        return this.http.post(this.configUrl2, client)
    }

    /* Leitura dos dados */
    read2() {
        return this.http.get(this.configUrl2)
    }
}