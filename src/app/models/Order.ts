import { Movie } from './Movie';

export class Order {
  id: number; 
  created:string;
  status:number;

  constructor(
    public companyId: number,
    public createdBy: string,
    public paymentMethod: string,
    public totalPrice: number,
    public orderRows: Movie[]
  ) {
    this.id = Math.floor(Math.random() * 90000) + 10000; 
    this.created = new Date().toString();
    this.status = 0;
  }
}
