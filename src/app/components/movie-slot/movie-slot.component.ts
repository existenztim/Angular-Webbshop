import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
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

  trackCategoryById(index: number, category:ICategory) {
    return category.categoryId;
  }
}
