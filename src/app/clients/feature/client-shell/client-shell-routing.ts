import { Routes } from '@angular/router';

export const clientRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../client-list/client-list.component').then(
        (x) => x.ClientListComponent
      ),
    pathMatch: 'full',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../client-detail/client-detail.component').then(
        (x) => x.ClientDetailComponent
      ),
  },
  {
    path: ':id/survey',
    loadComponent: () =>
      import('../client-survey/client-survey.component').then(
        (x) => x.ClientSurveyComponent
      ),
  },
];
