import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthsPage } from './births.page';

const routes: Routes = [
  {
    path: '',
    component: BirthsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthsPageRoutingModule {}
