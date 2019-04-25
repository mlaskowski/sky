import {Routes, Route} from '@angular/router';
import {DetailsComponent} from './details.component';

export const detailsRoutes: Routes = [
  {
    path: ':id',
    component: DetailsComponent
  }
];

export const detailsLazyLoadRoute: Route = {
  path: 'title',
  loadChildren: 'app/details/details.module#DetailsModule'
};
