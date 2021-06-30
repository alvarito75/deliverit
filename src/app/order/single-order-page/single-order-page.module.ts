import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleOrderPagePageRoutingModule } from './single-order-page-routing.module';

import { SingleOrderPagePage } from './single-order-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleOrderPagePageRoutingModule
  ],
  declarations: [SingleOrderPagePage]
})
export class SingleOrderPagePageModule {}
