import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneEventLayoutPageRoutingModule } from './one-event-layout-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OneEventLayoutPage } from './one-event-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule,
    OneEventLayoutPageRoutingModule
  ],
  declarations: [OneEventLayoutPage]
})
export class OneEventLayoutPageModule { }
