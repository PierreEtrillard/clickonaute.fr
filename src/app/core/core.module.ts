import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaskComponent } from './components/mask/mask.component';
import { BackgroundComponent } from './components/background/background.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MaskComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MaskComponent,
    BackgroundComponent
  ]
})
export class CoreModule { }
