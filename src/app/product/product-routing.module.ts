import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  },
  {
    path: 'new-product',
    loadChildren: () => import('./new-product/new-product.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'single-product',
    loadChildren: () => import('./single-product/single-product.module').then( m => m.SingleProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
