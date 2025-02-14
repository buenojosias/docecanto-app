import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
// import { LoadingComponentModule } from '../components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // LoadingComponentModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  declarations: [HomePage]
})
export class HomePageModule {}
