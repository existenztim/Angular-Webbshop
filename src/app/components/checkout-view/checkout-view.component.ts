import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { Order } from 'src/app/models/Order';
import { ImageService } from 'src/app/services/image.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
})
export class CheckoutViewComponent {
  cartItems: Movie[] = [];
  order = new Order(Math.floor(Math.random() * 90000) + 10000,0, '', '', '',0, 0, this.cartItems);
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

  constructor(private router: Router, private orderService: OrderService, private imageService: ImageService) {
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
  handleImg(event: Event) {
    this.imageService.handleBrokenImgLink(event);
  }

  submitCheckoutForm(event: Event) {
    event.preventDefault();
    if(this.checkoutForm.valid){
      this.userCredentials.firstName = this.checkoutForm.value.firstName ?? '';
      this.userCredentials.surName = this.checkoutForm.value.surName ?? '';
      this.userCredentials.paymentMethod = this.checkoutForm.value.paymentMethod ?? '';

      this.order.createdBy = `${this.userCredentials.firstName} ${this.userCredentials.surName}`;
      this.order.paymentMethod = this.userCredentials.paymentMethod;
      this.order.created = "0001-01-01T00:00:00";
      this.formResponse = !this.formResponse;
      this.setOrderIdForItems(this.order);
      console.log("order:", this.order);
      //this.checkoutForm.reset();

      this.orderService.postOrder(this.order).subscribe({
        next: (response) => {
          console.log("Order successfully sent:", response);
        },
        error: (error) => {
          //hamnar här varje gång
          console.error("Error sending order:", error);
        },
        complete: () => {
          console.log("Subscription completed");
        }
      });

    } else {
      this.formResponse = !this.formResponse;
      this.checkoutForm.get('firstName')?.setErrors({ 'required': true });
    }
  }

  setOrderIdForItems(order: Order) {
    console.log("orderId", order.id)
    order.orderRows.forEach(item => {
      return (
        item.orderId = order.id,
        item.product = null
        );
    })
  }
}
