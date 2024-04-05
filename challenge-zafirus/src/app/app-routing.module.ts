import { CharacterPageModule } from './pages/character/character.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./pages//home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: 'characters/:id',
    loadChildren: () => import('./pages//character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
