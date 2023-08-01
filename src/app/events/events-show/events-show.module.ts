import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsShowPageRoutingModule } from './events-show-routing.module';

import { EventsShowPage } from './events-show.page';
import { EventSongsComponent } from 'src/app/event-songs/event-songs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsShowPageRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  declarations: [EventsShowPage, EventSongsComponent]
})
export class EventsShowPageModule {}
