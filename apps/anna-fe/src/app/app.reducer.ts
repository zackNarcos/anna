import { ActionReducerMap } from '@ngrx/store';
import {productStoreReducer, ProductStoreReducerState} from "./product/store/product-store.reducer";
import {libsStoreReducer, LibsStoreReducerState} from "@anna/core";
import {categoryStoreReducer} from "./category/store/category-store.reducer";

export interface AppState {
  products: ProductStoreReducerState;
  libs: LibsStoreReducerState
}

export const appReducer: ActionReducerMap<AppState> = {
  product: productStoreReducer,
  libs: libsStoreReducer,
  category: categoryStoreReducer,
} as any;
