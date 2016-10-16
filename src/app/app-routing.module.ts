import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SimpleRouteComponent} from './simple-route/simple-route.component';
import {BundledModule} from './bundled/bundled.module';

export function loadBundledModule() { return BundledModule; }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SimpleRouteComponent
  },
  {
    path: 'bundled',
    loadChildren: loadBundledModule
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
