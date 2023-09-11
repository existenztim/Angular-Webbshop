import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }


  calcTotalPrice(movies: Movie[]) {
    let totalPrice = 0;
    movies.forEach(movie => {
      for(let i = 0; i < movie.amount; i++) {
        totalPrice += movie.product.price;
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

}
