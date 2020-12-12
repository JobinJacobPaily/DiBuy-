import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductreviewPageRoutingModule } from './productreview-routing.module';

import { ProductreviewPage } from './productreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductreviewPageRoutingModule
  ],
  declarations: [ProductreviewPage]
})
export class ProductreviewPageModule {}
