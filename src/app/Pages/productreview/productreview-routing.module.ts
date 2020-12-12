import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductreviewPage } from './productreview.page';

const routes: Routes = [
  {
    path: '',
    component: ProductreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductreviewPageRoutingModule {}
