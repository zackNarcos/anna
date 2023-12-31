import { Injectable } from '@angular/core';
import {coreConfig} from "../core.config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = coreConfig.backend;
  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  public getProducts(): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/product/show`);
  }

  public createProduct(product: any): Observable<Product> {
    const formData = new FormData();
    console.log('product', product)
    formData.append('category', product.category);
    formData.append('name', product.name);
    formData.append('price', JSON.stringify(product.price));
    formData.append('description', product.description);
    formData.append('quantity', JSON.stringify(product.quantity));
    if (product.productImages && product.productImages.length > 0) {
      for (let i = 0; i < product.productImages.length; i++) {
        formData.append('productImages', product.productImages[i]);
      }
    }
    return this.httpClient.post<Product>(`${this.baseUrl}/product`, formData);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.baseUrl}/product/${product._id}`, product);
  }

  public deleteProduct(product: Product): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}/product/${product._id}`);
  }

}
