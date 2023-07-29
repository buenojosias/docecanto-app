import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsListPageRoutingModule } from './events-list-routing.module';

import { EventsListPage } from './events-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsListPageRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  declarations: [EventsListPage]
})
export class EventsListPageModule {}
