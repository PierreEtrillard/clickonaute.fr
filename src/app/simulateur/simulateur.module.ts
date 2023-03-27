import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulateurComponent } from './components/simulateur/simulateur.component';
import { SimulateurRoutingModule } from './simulateur-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SimulateurComponent
  ],
  imports: [
    CommonModule,
    SimulateurRoutingModule,
    ReactiveFormsModule
  ]
})
export class SimulateurModule { }
