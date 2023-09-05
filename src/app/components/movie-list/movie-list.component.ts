import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() movieList: IMovie[] = [];

  constructor(private imageService: ImageService) {}

  handleImg(event: Event) {
    this.imageService.handleBrokenImgLink(event);
  }
}
