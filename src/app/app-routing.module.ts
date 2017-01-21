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
    // Comment loadChildren above and uncomment the line below to get non lazy loading working with AoT
    // Do not delete / comment the  `loadBundledModule` declaration or the module will be lazy loaded
    // loadChildren: './bundled/bundled.module#BundledModule'
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
