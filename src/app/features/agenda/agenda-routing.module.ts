import { NgModule } from '@angular/core';
import { AgendaComponent } from './components/agenda.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:AgendaComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AgendaRoutingModule { }
