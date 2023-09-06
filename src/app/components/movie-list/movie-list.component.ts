import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() movieList: IMovie[] = [];

}
