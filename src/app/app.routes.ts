import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cep-consulta',
    loadComponent: () => import('./cep-consulta/cep-consulta.page').then( m => m.CepConsultaPage)
  },
];
