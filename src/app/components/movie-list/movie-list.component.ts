import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() movieList: IMovie[] = [];
  @Output() newItem: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  trackMovieById(index: number, movie: IMovie) {
    return movie.id;
  }

  movieAdded(movie: IMovie) {
    this.newItem.emit(movie);
  }

  
}
