import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';

const routes: Routes = [
{path:'accueil', loadChildren: ()=>import('./accueil/accueil.module').then(m => m.AccueilModule)},
{path:'sites', loadChildren: ()=>import('./sites/sites.module').then(m => m.SitesModule)},
{path:'applications', loadChildren: ()=>import('./applications/applications.module').then(m => m.ApplicationsModule)},
{path:'contact', loadChildren: ()=>import('./contact/contact.module').then(m => m.ContactModule)},
{path:'jeux', loadChildren: ()=>import('./games/games.module').then(m => m.GamesModule)},
{path:'simulateur', loadChildren: ()=>import('./simulateur/simulateur.module').then(m => m.SimulateurModule)},
{path: '**', redirectTo:'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
