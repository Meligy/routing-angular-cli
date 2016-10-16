import {HomepageModule} from './homepage/homepage.module';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export function loadHomepage() { return HomepageModule; }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: loadHomepage
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
