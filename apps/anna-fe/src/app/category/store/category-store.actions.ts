import {Category} from "@anna/core";
import {Action} from "@ngrx/store";

export enum CategoryStoreActionsTypes {

  LoadCategories = '[Categories] Load Categories',
  LoadCategoriesSuccess = '[Categories] Load Categories Success',
  LoadCategoriesFailure = '[Categories] Load Categories Failure',

}


export class LoadCategoriesAction implements Action {
  readonly type = CategoryStoreActionsTypes.LoadCategories;
  readonly isLoadMore: boolean;

  constructor() {
    this.isLoadMore = true;
  }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = CategoryStoreActionsTypes.LoadCategoriesSuccess;
  readonly categories: Category[];
  readonly isLoadMore: boolean;

  constructor(categories: Category[]) {
    this.categories = categories;
    this.isLoadMore = false
  }
}

export class LoadCategoriesFailureAction implements Action {
  readonly type = CategoryStoreActionsTypes.LoadCategoriesFailure;
  readonly error: any;
  readonly isLoadMore: boolean;

  constructor(error: any) {
    this.error = error;
    this.isLoadMore = false
  }
}

export type CategoryStoreActions =
  | LoadCategoriesAction
  | LoadCategoriesSuccessAction
  | LoadCategoriesFailureAction
