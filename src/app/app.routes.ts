import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About)
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services').then((m) => m.Services)
  },
  {
    path: 'services/:serviceId',
    loadComponent: () =>
      import('./features/service-detail/service-detail').then((m) => m.ServiceDetail)
  },
  {
    path: 'partners',
    loadComponent: () => import('./features/partners/partners').then((m) => m.Partners)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact)
  },
  {
    path: 'thank-you',
    loadComponent: () => import('./features/thank-you/thank-you').then((m) => m.ThankYou)
  },
  { path: '**', redirectTo: '' }
];
