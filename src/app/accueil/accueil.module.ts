import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AccueilRoutingModule } from './accueil-routing.module';
import { MaskComponent } from './components/mask/mask.component';



@NgModule({
  declarations: [
    AccueilComponent,
    MaskComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ],
  exports:[
    AccueilComponent,
    MaskComponent,
  ]
})
export class AccueilModule { }
