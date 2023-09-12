import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CategorySelect } from 'src/app/models/CategoryEnum';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
  movieService: MovieService = inject(MovieService);
  constructor(private router: Router) {}

  categories = [
    { id: 5, name: CategorySelect.ACTION },
    { id: 6, name: CategorySelect.THRILLER },
    { id: 7, name: CategorySelect.COMEDY },
    { id: 8, name: CategorySelect.SCI_FI },
  ];

  onCategorySelected(categoryName: string) {
    this.router.navigate(['/shop', categoryName]);
  }
}
