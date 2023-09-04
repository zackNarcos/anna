import { Category } from './category';
export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  productImage: File;
  productImages: File[];
  quantity: number;
  createdAt?: string;
  updatedAt?: string;
}
