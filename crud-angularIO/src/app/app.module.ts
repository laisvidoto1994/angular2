/* Inicialização padrão com os modulos excenciais da aplicação */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// formularios
import { RouterModule } from '@angular/router';// roteador
import { HttpClientModule } from '@angular/common/http';// requisição http
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatoComponent } from './contato/contato.component';
import { GraficoComponent } from './grafico/grafico.component';

/* Service */
import { CrudService } from '../crud.service';

/* importação do chart do google */
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    FormCreateComponent,
    DetailsComponent,
    DashboardComponent,
    ContatoComponent,
    ModalComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2GoogleChartsModule,// importação do chart do google

    // roteamento das paginas
    RouterModule
      .forRoot([
        {
          path: '',// define á pagina inicial da aplicação
          component: TableComponent
        },
        {
          path: 'create',// quando á requisição for /create  sem parametros
          component: FormCreateComponent
        },
        {
          path: 'details',// quando á requisição for /details sem parametros
          component: DetailsComponent
        },
        {
          path: 'details/:produto',// quando á requisição for /details e passar o id por parametro
          component: DetailsComponent
        },
        {
          path: 'alterar/',// quando á requisição for /alterar e passar o id por parametro
          component: DetailsComponent
        },
        {
          path: 'alterar/:produto',// quando á requisição for /alterar e passar o id por parametro
          component: DetailsComponent
        },
        {
          path: 'dashboard',// quando á requisição for /dashboard sem parametros
          component: GraficoComponent
        },
        {
          path: 'contato',// quando á requisição for /contato sem parametros
          component: ContatoComponent
        },
      ])
  ],
  providers: [
    CrudService // deixar o serviço disponivel para outros poderem utilizar
  ],
  bootstrap: [
    AppComponent // aplicação padrão é AppComponent mesmo
  ]
})

export class AppModule { }
