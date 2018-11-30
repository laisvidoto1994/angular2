
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { ServicoService } from './servico.service';   

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CadastroComponent,
    CabecalhoComponent,
    DetalheComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    routing,
  ],
  exports: [
    ListaComponent,
    CadastroComponent,
    CabecalhoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
