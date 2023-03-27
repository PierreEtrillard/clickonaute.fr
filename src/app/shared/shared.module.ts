import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimBtnComponent } from './components/sim-btn/sim-btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SimBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SimBtnComponent
  ]
})
export class SharedModule { }
