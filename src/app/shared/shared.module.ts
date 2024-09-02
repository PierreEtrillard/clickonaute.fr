import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimBtnComponent } from './components/sim-btn/sim-btn.component';
import { RouterModule } from '@angular/router';
import { MessageDisplayerComponent } from './components/message-displayer/message-displayer.component';

@NgModule({
  declarations: [
    SimBtnComponent,
    MessageDisplayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SimBtnComponent,
    MessageDisplayerComponent
  ]
})
export class SharedModule { }
