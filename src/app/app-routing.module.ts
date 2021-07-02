import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'product',
    children: [
      {
        path: '',
        loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
      },
      {
        path: ':idProduct',
        loadChildren: () => import('./product/single-product/single-product.module').then( m => m.SingleProductPageModule)
      }
    ],
  },
  {
    path: 'order',
    children: [
      {
        path: '',
        loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
      },
      {
        path: ':idOrder',
        loadChildren: () => import('./order/single-order-page/single-order-page.module').then(m => m.SingleOrderPagePageModule)
      }
    ],
  },
  {
    path: 'create-order',
    loadChildren: () => import('./order/new-order/new-order.module').then( m => m.NewOrderPageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./product/new-product/new-product.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
