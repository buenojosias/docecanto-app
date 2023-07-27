import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsSongsPageRoutingModule } from './events-songs-routing.module';

import { EventsSongsPage } from './events-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsSongsPageRoutingModule
  ],
  declarations: [EventsSongsPage]
})
export class EventsSongsPageModule {}
