import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsComponent } from './methods.component';
import { MethodsRoutingModule } from './methods-routing.module';



@NgModule({
  declarations: [MethodsComponent],
  imports: [
    CommonModule,
    MethodsRoutingModule
  ],
  exports: [MethodsComponent],
})
export class MethodsModule { }
