import { Component } from '@angular/core';

// passando meta dados para o Component
@Component({
    //selector-> web components, criar componentes em html customizados
    //nome da tag em html que queremos criar para depois utilizar
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component con Angular 2!</p>
    `
})


export class MeuPrimeiroComponent { }