import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LazyComponent
  },
  {
    path: 'deep',
    // Loading by relative path didn't seem to work here
    // loadChildren: './deep/deep.module#DeepModule'
    loadChildren: 'app/lazy/deep/deep.module#DeepModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LazyRoutingModule { }
