import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutViewComponent } from './components/checkout-view/checkout-view.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSlotComponent } from './components/movie-slot/movie-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    MainShopComponent,
    ShoppingCartComponent,
    CheckoutViewComponent,
    MovieListComponent,
    MovieSlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
