import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParacevirPage } from './paracevir.page';

const routes: Routes = [
  {
    path: '',
    component: ParacevirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParacevirPageRoutingModule {}
