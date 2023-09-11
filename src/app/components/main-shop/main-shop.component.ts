import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorySelect } from 'src/app/models/CategoryEnum';
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
  searchText: string = '';
  cartItems: Movie[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
      this.movieSerive();
    });
    if (localStorage.getItem('cartItems')) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')!);
    }
   
  }

  
  movieSerive() {
    if (this.getData === null) {
      this.movieService.getMovies().subscribe(movies => {
        this.movieList = movies;
        this.setCategoryName();
        localStorage.setItem('movies', JSON.stringify(this.movieList));
        this.filterMoviesByCategory();
      });
    } else {
      this.movieList = this.getData;
      this.filterMoviesByCategory();
    }
  }


  navigateToCategory(categoryName: string) {
    this.router.navigate(['/shop', categoryName]);
  }
 
  setCategoryName() {
    this.movieList.forEach(movie => {
      movie.productCategory.forEach(category => {
        if (category.category === null) {
          switch (category.categoryId) {
            case 5:
              category.category = CategorySelect.ACTION;
              break;
            case 6:
              category.category = CategorySelect.THRILLER;
              break;
            case 7:
              category.category = CategorySelect.COMEDY;
              break;
            case 8:
              category.category = CategorySelect.SCI_FI;
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
      this.movieList = this.movieService.getMoviesByCategory(this.movieList, this.categoryName);
    }
  }
  
  filterMoviesByInput() {
    const searchTextTrimmed = this.searchText.toLowerCase().trim(); 
  
    if (searchTextTrimmed === '') {
      const copiedMovies = [...this.getData || []];
      this.movieList = this.movieService.getMoviesByCategory(copiedMovies, this.categoryName);
    } else {
      const filteredByCategory = this.movieService.getMoviesByCategory(this.getData || [], this.categoryName);
      const filteredBySearch = filteredByCategory.filter(movie => movie.name.toLowerCase().includes(searchTextTrimmed));
      this.movieList = filteredBySearch;
    }
  }

  generateRandomFiveDigitNumber(): number {
    return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  }

  newItemToCart(item: IMovie) {
    const index = this.cartItems.findIndex(cartItem => cartItem.productId === item.id);
    if (index !== -1) {
      this.cartItems[index].amount++;
      return;
    }
    this.cartItems.push(new Movie(item.id, item, 1, 0, this.generateRandomFiveDigitNumber()));
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
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
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
