import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeepComponent } from './deep.component';

export const routes: Routes = [
  {
    path: '',
    component: DeepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DeepRoutingModule { }
