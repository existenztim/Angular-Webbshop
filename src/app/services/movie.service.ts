import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/IMovie';
//import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    const apiUrl = this.baseUrl + 'products';
    return this.http.get<IMovie[]>(apiUrl);
  }

  // getCategories(param: string): Observable<ICategory[]> {
  //   const apiUrl = this.baseUrl + 'categories/' + param;
  //   return this.http.get<ICategory[]>(apiUrl);
  // }

  getMoviesByCategory(movies: IMovie[], categoryName: string): IMovie[] {
    return movies.filter(movie => {
      return movie.productCategory.some(cat => cat.category === categoryName);
    });
  }
  getMoviesByInput(movies: IMovie[], searchText: string) : IMovie[]{
    return movies.filter((movie) => movie.name.includes(searchText));
  }
}
