import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';

const routes: Routes = [
{path:'accueil', loadChildren: ()=>import('./accueil/accueil.module').then(m => m.AccueilModule)},
{path: '**', redirectTo:'accueil'}
// {path:"", component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
