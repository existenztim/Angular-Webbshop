import { IMovie } from './IMovie';

export class Movie {
  constructor(
    public productId: number,
    public product: IMovie | null,
    public amount: number,
  ) {}
}
