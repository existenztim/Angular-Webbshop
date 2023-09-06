import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/IMovie';
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
  categoryName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
      console.log(this.categoryName);
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
      this.movieList = this.movieService.getMoviesByCategory(this.movieList, this.categoryName);
    }
  }
  
  filterMoviesByInput() {
    this.movieList = this.movieService.getMoviesByInput(this.movieList, this.searchText);
  }

}
