import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsShowPage } from './events-show.page';

const routes: Routes = [
  {
    path: '',
    component: EventsShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsShowPageRoutingModule {}
