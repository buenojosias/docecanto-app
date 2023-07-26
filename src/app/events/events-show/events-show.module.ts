import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsShowPageRoutingModule } from './events-show-routing.module';

import { EventsShowPage } from './events-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsShowPageRoutingModule
  ],
  declarations: [EventsShowPage]
})
export class EventsShowPageModule {}
