import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsShowPage } from './songs-show.page';

const routes: Routes = [
  {
    path: '',
    component: SongsShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsShowPageRoutingModule {}
