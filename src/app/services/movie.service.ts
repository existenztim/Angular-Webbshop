import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/IMovie';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/';

  protected movieList: IMovie[] = [];
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    const apiUrl = this.baseUrl + 'products';
    return this.http.get<IMovie[]>(apiUrl);
  }

  getCategories(): Observable<ICategory[]> {
    const apiUrl = this.baseUrl + 'categories';
    return this.http.get<ICategory[]>(apiUrl);
  }
}
