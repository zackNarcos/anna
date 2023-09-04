import {Product} from "@anna/core";
import {Action} from "@ngrx/store";

export enum ProductStoreActionsTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFailure = '[Products] Load Products Failure',

  SelectProduct = '[Products] Select Product',

}

export class LoadProductsAction implements Action {
  readonly type = ProductStoreActionsTypes.LoadProducts;
  readonly isLoadMore: boolean;

  constructor() {
    this.isLoadMore = true;
  }
}

export class LoadProductsSuccessAction implements Action {
  readonly type = ProductStoreActionsTypes.LoadProductsSuccess;
  readonly products: Product[];
  readonly isLoadMore: boolean;

  constructor(products: Product[]) {
    this.products = products;
    this.isLoadMore = false
  }
}

export class LoadProductsFailureAction implements Action {
  readonly type = ProductStoreActionsTypes.LoadProductsFailure;
  readonly error: any;
  readonly isLoadMore: boolean;

  constructor(error: any) {
    this.error = error;
    this.isLoadMore = false
  }
}

export class SelectProductAction implements Action {
  readonly type = ProductStoreActionsTypes.SelectProduct;
  readonly product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}

export type ProductStoreActions =
  LoadProductsAction
  | LoadProductsSuccessAction
  | LoadProductsFailureAction
  | SelectProductAction
