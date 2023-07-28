import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsSearchPageRoutingModule } from './songs-search-routing.module';

import { SongsSearchPage } from './songs-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsSearchPageRoutingModule
  ],
  declarations: [SongsSearchPage]
})
export class SongsSearchPageModule {}
