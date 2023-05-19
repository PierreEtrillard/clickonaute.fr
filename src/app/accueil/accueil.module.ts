import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AccueilRoutingModule } from './accueil-routing.module';
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
