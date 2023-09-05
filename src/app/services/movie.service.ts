import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  protected movieList: IMovie[] = [];
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    const apiUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
    return this.http.get<IMovie[]>(apiUrl);
  }
}
