import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'accueil', loadChildren:()=> import('./core/core.module').then(m => m.CoreModule)},
{path: '**', redirectTo:'accueil'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
