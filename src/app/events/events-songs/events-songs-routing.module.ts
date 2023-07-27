import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsSongsPage } from './events-songs.page';

const routes: Routes = [
  {
    path: '',
    component: EventsSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsSongsPageRoutingModule {}
