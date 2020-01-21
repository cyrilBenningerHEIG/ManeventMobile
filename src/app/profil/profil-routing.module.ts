import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  },
  {
    path: 'event/:id',
    loadChildren: () => import('../home/event/one-event-layout/one-event-layout.module').then( m => m.OneEventLayoutPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('../home/event/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'updateUser',
    loadChildren: () => import('../update-user/update-user.module').then( m => m.UpdateUserPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
