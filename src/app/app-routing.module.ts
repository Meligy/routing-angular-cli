import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, ExtraOptions} from '@angular/router';

import {SimpleRouteComponent} from './simple-route/simple-route.component';
import {BundledModule} from './bundled/bundled.module';

export function loadBundledModule() { return BundledModule; }

// export function loadLazy() {
//   return new Promise(function (resolve) {
//     (require as any).ensure([], function (require: any) {
//       resolve(require('./lazy/lazy.module.ngfactory')['LazyModuleNgFactory']);
//     });
//   });
// }

export function loadLazy2() {
  return new Promise(function (resolve) {
    (require as any).ensure([], function (require: any) {
      resolve(require('./lazy/lazy.module')['LazyModule']);
    });
  });
}

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
    path: '',
    loadChildren: 
      './lazy/lazy.module#LazyModuleNgFactory'
  }
];

// export const extraOptions = <ExtraOptions> { 
//   preloadingStrategy: PreloadAllModules 
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, extraOptions)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
