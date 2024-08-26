import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulateurComponent } from './components/simulateur/simulateur.component';

const routes: Routes = [
{path:"", component:SimulateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulateurRoutingModule { }
