import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { DetailsComponent } from './details/details.component';

import {CrudService} from '../crud.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    FormUpdateComponent,
    FormCreateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { 
      path:'',
      component: TableComponent
    }, 
    { 
      path:'create',
      component: FormCreateComponent
    },
    { 
      path:'update',
      component: FormUpdateComponent
    },
    {
      path: 'details',
      component: DetailsComponent
    }
    ])
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
