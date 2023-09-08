import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
})
export class CheckoutViewComponent {
  cartItems: Movie[] = [];
  order = new Order (
    0,
    "",
    "",
    0,
    this.cartItems
    );
    
  constructor(private router: Router) {
    
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.cartItems = navigation.extras.state['cartItems'];
      this.order.orderRows = this.cartItems;
      console.log(this.order);
    } else {
      this.cartItems = [];
    }  
  }

  ngOnInit() {}
}
