import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalheComponent } from './detalhe/detalhe.component';

/* configurando as rotas das paginas */
const APP_ROUTES: Routes = [
    // { path: 'editar', name: 'editar', component: AppComponent },
    // { path: 'visualizar', name: 'visualizar', component: AppComponent },

    { path: 'cadastro', component: CadastroComponent },
    { path: '', component: ListaComponent },

    { path: 'detalhe/:id', component: DetalheComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

