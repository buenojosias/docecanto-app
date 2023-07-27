import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsIndexPageRoutingModule } from './songs-index-routing.module';

import { SongsIndexPage } from './songs-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsIndexPageRoutingModule
  ],
  declarations: [SongsIndexPage]
})
export class SongsIndexPageModule {}
