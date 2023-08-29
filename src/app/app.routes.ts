import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/feature/home/home-routing').then((x) => x.homeRoutes),
    pathMatch: 'full',
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./clients/feature/client-shell/client-shell-routing').then(
        (x) => x.clientRoutes
      ),
  },
];
