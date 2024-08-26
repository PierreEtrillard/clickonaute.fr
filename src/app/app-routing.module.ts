import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'accueil', loadChildren: ()=>import('./features/accueil/accueil.module').then(m => m.AccueilModule)},
{path:'agenda', loadChildren: ()=>import('./features/agenda/agenda.module').then(m => m.AgendaModule)},
{path:'front', loadChildren: ()=>import('./features/front/front.module').then(m => m.FrontModule)},
{path:'back', loadChildren: ()=>import('./features/back/back.module').then(m => m.BackModule)},
{path:'methods', loadChildren: ()=>import('./features/methods/methods.module').then(m => m.MethodsModule)},
{path:'contact', loadChildren: ()=>import('./features/contact/contact.module').then(m => m.ContactModule)},
{path:'jeux', loadChildren: ()=>import('./features/games/games.module').then(m => m.GamesModule)},
{path:'simulateur', loadChildren: ()=>import('./features/simulateur/simulateur.module').then(m => m.SimulateurModule)},
{path: '**', redirectTo:'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
