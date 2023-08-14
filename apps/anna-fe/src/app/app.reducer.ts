import { ActionReducerMap } from '@ngrx/store';
import {ProductStoreReducerState} from "./product/store/product-store.reducer";

export interface AppState {
  products: ProductStoreReducerState;
}

export const appReducer: ActionReducerMap<AppState> = {} as any;
