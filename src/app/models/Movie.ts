import { IMovie } from './IMovie';

export class Movie {
  constructor(
    public id: number,
    public productId: number,
    public product: IMovie | null,
    public amount: number,
    public orderId: number,
  ) {}
}
