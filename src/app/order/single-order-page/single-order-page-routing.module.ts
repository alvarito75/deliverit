import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleOrderPagePage } from './single-order-page.page';

const routes: Routes = [
  {
    path: '',
    component: SingleOrderPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleOrderPagePageRoutingModule {}
