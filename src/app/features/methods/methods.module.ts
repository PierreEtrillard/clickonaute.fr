import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsComponent } from './methods.component';
import { MethodsRoutingModule } from './methods-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';



@NgModule({
  declarations: [MethodsComponent],
  imports: [
    CommonModule,
    MethodsRoutingModule,
    SharedModule
],
  exports: [MethodsComponent],
  providers: [ProgressiveDisplayService],

})
export class MethodsModule { }
