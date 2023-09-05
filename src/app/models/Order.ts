import { Movie } from './Movie';

export class Order {
  created = new Date().toString();
  status = 0;

  constructor(
    public id: number,
    public companyId: number,
    created: string,
    public createdBy: string,
    public paymentMethod: string,
    public totalPrice: number,
    status: number,
    public orderRows: Movie[]
  ) {
    this.created = created;
    this.status = status;
  }
}
