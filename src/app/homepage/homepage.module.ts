import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
