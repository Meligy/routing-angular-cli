import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdLevelComponent } from './third-level.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdLevelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ThirdLevelRoutingModule { }
