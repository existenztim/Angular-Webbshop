import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
 
  constructor() {}

  @Input() cartItems: Movie[] = [];
  @Output() deleteItem: EventEmitter<Movie> = new EventEmitter<Movie>();


  removeItem(movie: Movie) {
    this.deleteItem.emit(movie);
  }
}
