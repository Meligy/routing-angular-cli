import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BundledRoutingModule } from './bundled-routing.module';
import { BundledComponent } from './bundled.component';

@NgModule({
  imports: [
    CommonModule,
    BundledRoutingModule
  ],
  declarations: [BundledComponent]
})
export class BundledModule { }
