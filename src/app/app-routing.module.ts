import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /*  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view-item',
    loadChildren: () => import('./Pages/view-item/view-item.module').then( m => m.ViewItemPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
   {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'productreview',
    loadChildren: () => import('./pages/productreview/productreview.module').then( m => m.ProductreviewPageModule)
  },
  {
    path: 'wish-list',
    loadChildren: () => import('./Pages/wish-list/wish-list.module').then( m => m.WishListPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./Pages/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
