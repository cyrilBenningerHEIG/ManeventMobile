import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneEventLayoutPage } from './one-event-layout.page';

const routes: Routes = [
  {
    path: '',
    component: OneEventLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneEventLayoutPageRoutingModule {}
