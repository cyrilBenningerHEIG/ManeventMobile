import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
  {
    path: 'favorites',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'profil',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
