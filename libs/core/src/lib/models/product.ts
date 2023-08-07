import { Category } from './category';
export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  productImage: File;
  quantity: number;
  createdAt?: string;
  updatedAt?: string;
}
