import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpProductPageRoutingModule } from './op-product-routing.module';

import { OpProductPage } from './op-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpProductPageRoutingModule
  ],
  declarations: [OpProductPage]
})
export class OpProductPageModule {}
