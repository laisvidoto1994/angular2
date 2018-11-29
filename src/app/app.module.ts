import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'
import { CursosModule } from './cursos/cursos.module';

//modularização raiz do angular, ajuda á organizar por areas
@NgModule({
  //componentes diretivas e pyips
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  //
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
  ],
  //todos os serviços que estaram disponiveis para esse modulo
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
