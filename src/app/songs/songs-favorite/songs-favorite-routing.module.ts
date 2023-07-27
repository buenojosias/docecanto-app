import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsFavoritePage } from './songs-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: SongsFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsFavoritePageRoutingModule {}
