import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdLevelRoutingModule } from './third-level-routing.module';
import { ThirdLevelComponent } from './third-level.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdLevelRoutingModule
  ],
  declarations: [ThirdLevelComponent]
})
export class ThirdLevelModule { }
