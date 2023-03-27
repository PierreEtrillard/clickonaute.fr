import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaskComponent } from './components/mask/mask.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MaskComponent
  ]
})
export class CoreModule { }
