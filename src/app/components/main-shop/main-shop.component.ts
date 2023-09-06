import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/IMovie';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
})
export class MainShopComponent {
  movieList: IMovie[] = [];
  movieService: MovieService = inject(MovieService);
  getData: IMovie[] | null = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')!) : null;
  cartItems: Movie[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
    });

    if (this.getData === null) {
      this.movieService.getMovies().subscribe(movies => {
        this.movieList = movies;
        this.setCategoryName();
        localStorage.setItem('movies', JSON.stringify(this.movieList));
        this.filterMoviesByCategory();
      });
    } else {
      this.movieList = this.getData;
      console.log(this.movieList);
      this.filterMoviesByCategory();
    }
  }

  setCategoryName() {
    this.movieList.forEach(movie => {
      movie.productCategory.forEach(category => {
        if (category.category === null) {
          switch (category.categoryId) {
            case 5:
              category.category = 'Action';
              break;
            case 6:
              category.category = 'Thriller';
              break;
            case 7:
              category.category = 'Comedy';
              break;
            case 8:
              category.category = 'Sci-fi';
              break;
            default:
              break;
          }
        }
      });
    });
  }

  filterMoviesByCategory() {
    if (this.categoryName) {
      this.movieList = this.movieService.filterMoviesByCategory(this.movieList, this.categoryName);
    }
  }

  generateRandomFiveDigitNumber(): number {
    return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  }

  newItemToCart(item: IMovie) {
    const index = this.cartItems.findIndex(cartItem => cartItem.productId === item.id);
    console.log(item)
    if (index !== -1) {
      this.cartItems[index].amount++;
      return;
    }
    this.cartItems.push(new Movie(item.id, item, 1, this.generateRandomFiveDigitNumber()));
  }

  deleteItem(movie: Movie) {
    const index = this.cartItems.findIndex(cartItem => cartItem.productId === movie.productId);
    if (index !== -1) {
      if (this.cartItems[index].amount > 1) {
        this.cartItems[index].amount--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }
}
