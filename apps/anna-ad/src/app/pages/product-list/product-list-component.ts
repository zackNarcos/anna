import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../store/store.service";
import {environment} from "../../../../../../environments/environment";
import {Product} from "@anna/core";
import {ofType} from "@ngrx/effects";

@Component({
    selector: 'table-cmp',
    templateUrl: 'product-list-component.html'
})

export class ProductListComponent{

  products$ = this.storeService.getProducts();
  categories! : any;

  imagesPath = environment.backend + '/uploads/';
  constructor(
    private storeService: StoreService,
  ) {
  }

  deleteProduct(product: Product) {
    this.storeService.deleteProduct(product);
    // this.products$ = this.storeService.getProducts();
  }

}
