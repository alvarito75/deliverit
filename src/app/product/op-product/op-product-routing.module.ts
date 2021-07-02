import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpProductPage } from './op-product.page';

const routes: Routes = [
  {
    path: '',
    component: OpProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpProductPageRoutingModule {}
