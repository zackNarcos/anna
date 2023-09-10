import {Category} from "@anna/core";
import {CategoryStoreActionsTypes} from "./category-store.actions";

export interface CategoryStoreReducerState {
  categories: Category[],
  isLoadMore: boolean,
  error?: any;
}

export const categoryStoreInitialState: CategoryStoreReducerState = {
  categories: [],
  isLoadMore: false,
  error: null,
}

export function categoryStoreReducer(state = categoryStoreInitialState, action: any): CategoryStoreReducerState {
  switch (action.type) {
    case CategoryStoreActionsTypes.LoadCategories:
      return {
        ...state,
        isLoadMore: true,
      };
    case CategoryStoreActionsTypes.LoadCategoriesSuccess:
      return {
        ...state,
        categories: action.categories,
        isLoadMore: false,
        error: null,
      };
    case CategoryStoreActionsTypes.LoadCategoriesFailure:
      return {
        ...state,
        isLoadMore: false,
        error: action.error,
      };


    default:
      return state;
  }
}
