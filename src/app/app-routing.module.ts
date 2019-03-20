import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'recherche', loadChildren: './pages/recherche/recherche.module#RecherchePageModule' },
  { path: 'ajout-lieu', loadChildren: './pages/ajout-lieu/ajout-lieu.module#AjoutLieuPageModule' },
  { path: 'favoris', loadChildren: './pages/favoris/favoris.module#FavorisPageModule' },
  { path: 'profil', loadChildren: './pages/profil/profil.module#ProfilPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
