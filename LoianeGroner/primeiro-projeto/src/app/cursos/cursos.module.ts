
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule//modulo de funcionalidade
  ],
  exports: [
    CursosComponent// torna-lo disponivel
  ],
  // provedor de serviços em angula2
  providers: [
    CursosService
  ]
})

export class CursosModule { }
