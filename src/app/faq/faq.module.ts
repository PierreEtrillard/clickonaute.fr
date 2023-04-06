import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { DiyComponent } from './components/diy/diy.component';
import { AccessibiliteComponent } from './components/accessibilite/accessibilite.component';
import { CoutComponent } from './components/cout/cout.component';
import { SeoComponent } from './components/seo/seo.component';
import { FormsModule } from '@angular/forms';
import { WhatCookiesComponent } from './components/what-cookies/what-cookies.component';

@NgModule({
  declarations: [
    DiyComponent,
    AccessibiliteComponent,
    CoutComponent,
    SeoComponent,
    WhatCookiesComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    FormsModule
  ],
})
export class FaqModule { }
