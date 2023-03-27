import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AccueilRoutingModule } from './accueil-routing.module';
import { MaskComponent } from '../core/components/mask/mask.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AccueilComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    SharedModule
  ],
  exports:[
    AccueilComponent,
  ]
})
export class AccueilModule { }
