import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsFavoritePageRoutingModule } from './songs-favorite-routing.module';

import { SongsFavoritePage } from './songs-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsFavoritePageRoutingModule
  ],
  declarations: [SongsFavoritePage]
})
export class SongsFavoritePageModule {}
