import { Movie } from './Movie';

export class Order {
  id: number;
  status: number;

  constructor(
    public companyId: number,
    public createdBy: string,
    public created: string,
    public paymentMethod: string,
    public totalPrice: number,
    public orderRows: Movie[]
  ) {
    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.status = 0;
  }
}
