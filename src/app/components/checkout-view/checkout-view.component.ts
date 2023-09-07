import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
})
export class CheckoutViewComponent {
  cartItems: Movie[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.cartItems = navigation.extras.state['cartItems'];
    } else {
     // får göra en annan lösning här
      this.cartItems = [];
    }
  }

  ngOnInit() {}
}
