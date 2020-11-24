import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'haberdetay',
    loadChildren: () => import('./haberdetay/haberdetay.module').then( m => m.HaberdetayPageModule)
  },
  {
    path: 'paracevir',
    loadChildren: () => import('./paracevir/paracevir.module').then( m => m.ParacevirPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
