import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { FrontRoutingModule } from './front-routing.module';



@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
  ],
  exports: [FrontComponent],
})
export class FrontModule { }
