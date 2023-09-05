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

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      this.movieList = movies;
      console.log(this.movieList);
    });
  }
}
