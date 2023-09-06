import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-movie-slot',
  templateUrl: './movie-slot.component.html',
})
export class MovieSlotComponent {
  @Input() movie!: IMovie;

  constructor(private imageService: ImageService) {}

  handleImg(event: Event) {
    this.imageService.handleBrokenImgLink(event);
  }
}
