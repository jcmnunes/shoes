import { Routes } from '@angular/router';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'shoe-list',
    pathMatch: 'full',
  },
  {
    path: 'shoe-list',
    title: 'Shoe List',
    component: ShoeListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
