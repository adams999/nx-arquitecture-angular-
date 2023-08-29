import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../home/home.component').then(
        (x) => x.HomeComponent
      ),
    pathMatch: 'full',
  },
];
