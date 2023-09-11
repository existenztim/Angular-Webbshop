import { Movie } from './Movie';

export class Order {

  constructor(
    public id: number,
    public companyId: number,
    public created: string,
    public createdBy: string,
    public paymentMethod: string,
    public totalPrice: number,
    public status: number,
    public orderRows: Movie[]
  ) {

  }
}
