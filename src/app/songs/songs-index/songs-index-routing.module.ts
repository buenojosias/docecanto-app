import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsIndexPage } from './songs-index.page';

const routes: Routes = [
  {
    path: '',
    component: SongsIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsIndexPageRoutingModule {}
