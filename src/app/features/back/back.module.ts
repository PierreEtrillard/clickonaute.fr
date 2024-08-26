import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back.component';
import { BackRoutingModule } from './back-routing.module';



@NgModule({
  declarations: [BackComponent],
  imports: [
    CommonModule,
    BackRoutingModule,
  ],
  exports: [BackComponent],
})
export class BackModule { }
