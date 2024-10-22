import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { FrontRoutingModule } from './front-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';



@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule
],
  exports: [FrontComponent],
  providers: [ProgressiveDisplayService],
})
export class FrontModule { }
