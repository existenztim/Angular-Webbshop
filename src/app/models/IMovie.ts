import { ICategory } from './ICategory';

export interface IMovie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  productCategory: ICategory[];
}
