import { MeuFormModule } from './meu-form/meu-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';   



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
