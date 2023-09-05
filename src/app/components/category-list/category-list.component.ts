import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
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
