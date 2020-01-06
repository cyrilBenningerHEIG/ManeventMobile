import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { Event } from '../../../models/event';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {
  newEvent: Event;
  constructor() {
    this.newEvent = new Event();
  }
}
