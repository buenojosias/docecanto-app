import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsShowPageRoutingModule } from './songs-show-routing.module';

import { SongsShowPage } from './songs-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsShowPageRoutingModule
  ],
  declarations: [SongsShowPage]
})
export class SongsShowPageModule {}
