import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  constructor(private router: Router) {}

  @Input() cartItems: Movie[] = [];
  @Output() deleteItem: EventEmitter<Movie> = new EventEmitter<Movie>();

  removeItem(movie: Movie) {
    this.deleteItem.emit(movie);
  }

  navigateToCheckout() {
    this.router.navigate(['checkout'], {
      state: { cartItems: this.cartItems } 
    });
  }
}