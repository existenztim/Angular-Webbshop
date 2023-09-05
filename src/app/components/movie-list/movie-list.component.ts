import { Component, inject } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movieList: IMovie[] = [];
  movieService: MovieService = inject(MovieService);
  getData: IMovie[] | null = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')!) : null;

  ngOnInit() {
    if (this.getData === null) {
      this.movieService.getMovies().subscribe(movies => {
        this.movieList = movies;
        this.setCategoryName();
        localStorage.setItem('movies', JSON.stringify(this.movieList));
      });
    } else {
      this.movieList = this.getData;
      console.log(this.movieList);
    }
  }
  setCategoryName() {
    this.movieList.forEach(movie => {
      movie.productCategory.forEach(movie => {
        if (movie.category === null) {
          switch (movie.categoryId) {
            case 5:
              movie.category = 'Action';
              break;
            case 6:
              movie.category = 'Thriller';
              break;
            case 7:
              movie.category = 'Comedy';
              break;
            case 8:
              movie.category = 'Sci-Fi';
              break;
            default:
              break;
          }
        }
      });
    });
  }
}
