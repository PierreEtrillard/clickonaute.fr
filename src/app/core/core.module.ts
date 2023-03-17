import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    BaseComponent
  ]
})
export class CoreModule { }
