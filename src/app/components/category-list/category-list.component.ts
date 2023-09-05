import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
  movieService: MovieService = inject(MovieService);
  constructor(private router: Router) {}

  categories = [
    { id: 5, name: 'Action' },
    { id: 6, name: 'Thriller' },
    { id: 7, name: 'Comedy' },
    { id: 8, name: 'Sci-fi' },
  ];

  onCategorySelected(categoryName: string) {
    this.router.navigate(['/shop', categoryName]);
  }
}
