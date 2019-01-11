
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';

//importando o componente da classe
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'; 
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  // componentes diretivas e pepeis
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,//modulo raiz
    AppRoutingModule,
    CursosModule
  ],
  providers: [],// servisos que vão estar disponiveis para toda a aplicação declarados de declarations
  bootstrap: [AppComponent]// AppComponent-> é á pagina html principal
})

export class AppModule { }
