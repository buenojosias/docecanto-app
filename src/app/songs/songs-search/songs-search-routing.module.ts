import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsSearchPage } from './songs-search.page';

const routes: Routes = [
  {
    path: '',
    component: SongsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsSearchPageRoutingModule {}
