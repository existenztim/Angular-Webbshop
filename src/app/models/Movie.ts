import { IMovie } from "./Imovie";

export class Movie {
    // "id": 9836,
    // "productId": 76,
    // "product": null,
    // "amount": 1,
    // "orderId": 8314

    constructor(public productId: number,public product: IMovie, public amount: number,public orderId:number,  public id?: number,  ) {

    }


}