import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'cep-consulta',
    loadComponent: () =>
      import('./cep-consulta/cep-consulta.page').then(
        (m) => m.CepConsultaPage
      ),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./card/card.page').then((m) => m.CardPage),
  },
];
