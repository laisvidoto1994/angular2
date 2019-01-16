import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-output-property',
    template: `
    <div>
        <button type="button" class="btn btn-secondary border-primary" (click)="decrementar()">-</button>
        <input type="text" [value]="valor" readonly>
        <button type="button" class="btn btn-secondary border-primary"  (click)="incrementar()">+</button>
    </div>
    `,
    //readonly-> não editavel
    //outputs:['mudouValor'],
})

export class OutputPropertyComponent {

    @Input() valor: number = 0;
    @Output() mudouValor = new EventEmitter();

    decrementar() {
        this.valor--;
        this.mudouValor.emit({ novoValor: this.valor });
    }

    incrementar() {
        this.valor++;
        this.mudouValor.emit({ novoValor: this.valor });
    }

    constructor() { }
}
