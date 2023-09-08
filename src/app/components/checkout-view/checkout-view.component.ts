import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
})
export class CheckoutViewComponent {
  cartItems: Movie[] = [];
  order = new Order(0, '', '', '', 0, this.cartItems);
  //behöver skapa createdBy, paymentMethod, created
  //     this.created = new Date().toString();

  userCredentials = {
    firstName: '',
    surName: '',
    paymentMethod: '',
  };

  checkoutForm = new FormGroup({
    firstName: new FormControl(''),
    surName: new FormControl(''),
    paymentMethod: new FormControl(''),
  });

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

  submitCheckoutForm(event: Event) {
    event.preventDefault();
    this.userCredentials.firstName = this.checkoutForm.value.firstName ?? '';
    this.userCredentials.surName = this.checkoutForm.value.surName ?? '';
    this.userCredentials.paymentMethod = this.checkoutForm.value.paymentMethod ?? '';
    console.log(this.userCredentials);
  }
}
