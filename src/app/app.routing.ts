import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ModuleWithProviders} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {detailsLazyLoadRoute} from './details/details.routing';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },

];
export const noPageFound: Routes = [
  { path: '**', component: PageNotFoundComponent}
];

export function getRoutes() {
  return [...routes, detailsLazyLoadRoute, ...noPageFound];
}

export const routing: ModuleWithProviders = RouterModule.forRoot(getRoutes(), {
  preloadingStrategy: PreloadAllModules
});

