import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BundledComponent } from './bundled.component';

export const routes: Routes = [
  {
    path: '',
    component: BundledComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BundledRoutingModule { }
