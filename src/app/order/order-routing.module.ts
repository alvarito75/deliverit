import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'single-order-page',
    loadChildren: () => import('./single-order-page/single-order-page.module').then( m => m.SingleOrderPagePageModule)
  },
  {
    path: 'new-order',
    loadChildren: () => import('./new-order/new-order.module').then( m => m.NewOrderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
