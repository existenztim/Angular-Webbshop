import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
})
export class CheckoutViewComponent {
  cartItems: Movie[] = [];
  order = new Order(0, '', '', '', 0, this.cartItems);
  formResponse = false;
  userCredentials = {
    firstName: '',
    surName: '',
    paymentMethod: '',
  };

  checkoutForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    surName: new FormControl('', [Validators.required]),
    paymentMethod: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private orderService: OrderService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.cartItems = navigation.extras.state['cartItems'];
      this.order.orderRows = this.cartItems;
    } else {
      this.cartItems = [];
    }
  }

  ngOnInit(){
    this.order.totalPrice = this.orderService.calcTotalPrice(this.cartItems);
  }

  submitCheckoutForm(event: Event) {
    event.preventDefault();
    if(this.checkoutForm.valid){
      this.userCredentials.firstName = this.checkoutForm.value.firstName ?? '';
      this.userCredentials.surName = this.checkoutForm.value.surName ?? '';
      this.userCredentials.paymentMethod = this.checkoutForm.value.paymentMethod ?? '';

      this.order.createdBy = `${this.userCredentials.firstName} ${this.userCredentials.surName}`;
      this.order.paymentMethod = this.userCredentials.paymentMethod;
      this.order.created = new Date().toString();
      console.log(this.order);
      this.formResponse = !this.formResponse;
      //kalla på en function som lägger orderId på = this.order.id för alla items
      this.checkoutForm.reset();
      //this.orderService.postOrder(this.order);
    } else {
      this.formResponse = !this.formResponse;
      this.checkoutForm.get('firstName')?.setErrors({ 'required': true });
    }
  }
}
