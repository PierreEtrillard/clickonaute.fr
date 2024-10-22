import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back.component';
import { BackRoutingModule } from './back-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';



@NgModule({
  declarations: [BackComponent],
  imports: [
    CommonModule,
    BackRoutingModule,
    SharedModule
],
  exports: [BackComponent],
  providers: [ProgressiveDisplayService],
})
export class BackModule { }
