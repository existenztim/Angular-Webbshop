import { ICategory } from './ICategory';

export interface IMovie {
  id: number;
  name: string;
  desc: string;
  price: number;
  imgUrl: string;
  year: number;
  productCategory: ICategory[];
}
