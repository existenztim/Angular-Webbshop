import { IMovie } from './IMovie';

export class Movie {
  // "id": 9836,
  // "productId": 76,
  // "product": null,
  // "amount": 1,
  // "orderId": 8314

  constructor(
    public productId: number,
    public product: IMovie | null,
    public amount: number,
    public orderId: number,
    public id?: number,
  ) {}
}
