import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulateurComponent } from './components/simulateur/simulateur.component';
import { SimulateurRoutingModule } from './simulateur-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { QuoteService } from './services/quote.service';



@NgModule({
  declarations: [
    SimulateurComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    SimulateurRoutingModule,
    ReactiveFormsModule
  ],
  providers:[QuoteService]
})
export class SimulateurModule { }
