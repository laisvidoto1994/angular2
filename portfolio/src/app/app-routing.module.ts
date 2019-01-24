import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Ng2LoadingSpinnerModule.forRoot({}),
    NgbPaginationModule,
    NgbAlertModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { 
  

}
