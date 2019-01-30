import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* */
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

/*  */
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/* Service*/
import { CrudService } from '../crud.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    FormCreateComponent,
    DetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    Ng2GoogleChartsModule,
    RouterModule
      .forRoot([
        {
          path: '',
          component: TableComponent
        },
        {
          path: 'create',
          component: FormCreateComponent
        },
        {
          path: 'details',
          component: DetailsComponent
        },
        {
          path: 'details/:id',
          component: DetailsComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
      ])
  ],
  providers: [
    CrudService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
