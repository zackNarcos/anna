import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {productConfig} from "../product.config";
import {ProductStoreReducerState} from "./product-store.reducer";
import {AppState} from "../../app.reducer";

export const storeSelectorsState : MemoizedSelector<AppState, ProductStoreReducerState>
  = createFeatureSelector(productConfig.store.key);

const selectProducts = createSelector(storeSelectorsState, (state: ProductStoreReducerState) => state.products ?? []);
export const productStoreSelectors = {
  selectProducts,
}