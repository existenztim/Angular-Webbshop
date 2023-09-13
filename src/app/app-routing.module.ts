import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CheckoutViewComponent } from './components/checkout-view/checkout-view.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CategoryListComponent },
  { path: 'shop/:categoryName', component: MainShopComponent },
  { path: 'checkout', component: CheckoutViewComponent }, 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

