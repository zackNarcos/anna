import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {categoryConfig} from "../category.config";
import {AppState} from "../../app.reducer";
import {CategoryStoreReducerState} from "./category-store.reducer";

export const storeSelectorsState : MemoizedSelector<AppState, CategoryStoreReducerState>
  = createFeatureSelector(categoryConfig.store.key);

const selectCategories = createSelector(storeSelectorsState, (state: CategoryStoreReducerState) => state.categories ?? []);
export const categoryStoreSelectors = {
  selectCategories,
}
