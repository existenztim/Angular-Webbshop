import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/Order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders'
  constructor(private http: HttpClient) { }


  calcTotalPrice(movies: Movie[]) {
    let totalPrice = 0;
    movies.forEach(movie => {
      for(let i = 0; i < movie.amount; i++) {
        if(movie.product)
        {totalPrice += movie.product.price;
        }
      }
    })
    return totalPrice;
  }

  calcTotalCartMovies(movies: Movie[]) {
    let totalAmountOfMovies = 0;
    movies.forEach(movie => {
      totalAmountOfMovies += movie.amount;
    })
    return totalAmountOfMovies;
  }
  // baseUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders'
  postOrder(order: Order){
    const apiUrl = this.baseUrl;
    return this.http.post<Order>(apiUrl, order);
  }
}

