import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-data-binding></app-data-binding>

    <lifeCycle [valorInicial]="valorInicias" *ngIf="deletarConteudo != true"></lifeCycle>
    <button (click)="valorInicias = 20">Mudar o valor</button>
    <button (click)="deletarConteudo = true">deletar tag life cycle</button>
  `
})

export class AppComponent {

  title = 'data-binding';

  deletarConteudo = false;

  valorInicias = 15;
}
