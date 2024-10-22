import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimBtnComponent } from './components/sim-btn/sim-btn.component';
import { RouterModule } from '@angular/router';
import { MessageDisplayerComponent } from './components/message-displayer/message-displayer.component';
import { ViewportEntranceDirective } from './directives/viewport-entrance.directive';

@NgModule({
  declarations: [
    SimBtnComponent,
    MessageDisplayerComponent,
    ViewportEntranceDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SimBtnComponent,
    MessageDisplayerComponent,
    ViewportEntranceDirective
  ]
})
export class SharedModule { }
