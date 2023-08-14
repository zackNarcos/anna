import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {appConfig} from "../app.config";
import {StoreReducerState} from "./store.reducer";
import {AppState} from "../app.reducer";

export const storeSelectorsState : MemoizedSelector<AppState, StoreReducerState>
  = createFeatureSelector(appConfig.store.key);

const isUpdating = createSelector(storeSelectorsState, (state: StoreReducerState) => state.isUpdating ?? false);
const isLoadMore = createSelector(storeSelectorsState, (state: StoreReducerState) => state.isLoadMore ?? false);

const selectCategories = createSelector(storeSelectorsState, (state: StoreReducerState) => state.categories ?? []);
// const selectCategory = createSelector(storeSelectorsState, (state: StoreReducerState) => state.category ?? null);
const selectProducts = createSelector(storeSelectorsState, (state: StoreReducerState) => state.products ?? []);

const selectAdmin = createSelector(storeSelectorsState, (state: StoreReducerState) => state.admin ?? null);
export const storeSelectors = {
  isUpdating,
  isLoadMore,
  selectCategories,
  // selectCategory,
  selectProducts,
  selectAdmin,
}
