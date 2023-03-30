import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibiliteComponent } from './components/accessibilite/accessibilite.component';
import { WhatCookiesComponent } from './components/what-cookies/what-cookies.component';
import { CoutComponent } from './components/cout/cout.component';
import { DiyComponent } from './components/diy/diy.component';
import { SeoComponent } from './components/seo/seo.component';

const routes: Routes = [
  {path:"cookies", component:WhatCookiesComponent},
  {path:"diy", component:DiyComponent},
  {path:"accessibilité", component:AccessibiliteComponent},
  {path:"coût", component:CoutComponent},
  {path:"seo", component:SeoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
