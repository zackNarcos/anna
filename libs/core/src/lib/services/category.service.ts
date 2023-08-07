import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {coreConfig} from "../core.config";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'any'
})
export class CategoryService {

  baseUrl = coreConfig.backend;

  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  public getCategories() :Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/category/show`);
  }

  public createCategory(category: Category):Observable<Category> {
    return this.httpClient.post<Category>(`${this.baseUrl}/category`, category);
  }

  public updateCategory(category: Category) :Observable<Category> {
    return this.httpClient.patch<Category>(`${this.baseUrl}/category/${category._id}`, category);
  }

  public deleteCategory(category: Category):Observable<Category> {
    return this.httpClient.delete<Category>(`${this.baseUrl}/category/${category._id}`);
  }
}
