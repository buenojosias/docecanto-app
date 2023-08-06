import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthsPageRoutingModule } from './births-routing.module';

import { BirthsPage } from './births.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthsPageRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  declarations: [BirthsPage]
})
export class BirthsPageModule {}
