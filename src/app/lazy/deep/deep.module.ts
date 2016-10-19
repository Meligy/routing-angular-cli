import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeepRoutingModule } from './deep-routing.module';
import { DeepComponent } from './deep.component';

@NgModule({
  imports: [
    CommonModule,
    DeepRoutingModule
  ],
  declarations: [DeepComponent]
})
export class DeepModule { }
