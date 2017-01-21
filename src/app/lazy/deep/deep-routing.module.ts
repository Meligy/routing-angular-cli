import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeepComponent } from './deep.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DeepComponent
  },
  {
    path: 'third',
    loadChildren: './third-level/third-level.module#ThirdLevelModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DeepRoutingModule { }
