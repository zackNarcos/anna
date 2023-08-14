import {Product} from "@anna/core";
import {ProductStoreActionsTypes} from "./product-store.actions";

export interface ProductStoreReducerState {
  products: Product[];
  isLoadMore: boolean;
  error?: any;
}

export const productStoreInitialState: ProductStoreReducerState = {
  products: [],
  isLoadMore: false,
  error: null,
}

export function productStoreReducer(state = productStoreInitialState, action: any): ProductStoreReducerState {
  switch (action.type) {
    case ProductStoreActionsTypes.LoadProducts:
      return {
        ...state,
        isLoadMore: true,
      };
    case ProductStoreActionsTypes.LoadProductsSuccess:
      return {
        ...state,
        products: action.products,
        isLoadMore: false,
        error: null,
      };
    case ProductStoreActionsTypes.LoadProductsFailure:
      return {
        ...state,
        isLoadMore: false,
        error: action.error,
      };
    default:
      return state;
  }
}
