import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { ProgressiveDisplayService } from 'src/app/shared/services/progressive-display.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    ProgressiveDisplayService
  ]
})
export class ContactModule { }
