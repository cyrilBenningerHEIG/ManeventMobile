import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventPage } from './event.page';

const routes: Routes = [
  {
    path: '',
    component: EventPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'event/:id',
    loadChildren: () => import('./one-event-layout/one-event-layout.module').then( m => m.OneEventLayoutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventPageRoutingModule {}
