import {Action} from "@ngrx/store";
import {Category} from "@anna/core";

export enum LibsStoreActionsEnum {
  SetCategories = '[LibsStore] Set Categories',

  SetSelectedCategory = '[LibsStore] Set Selected Category',
}

export class SetCategoriesAction implements Action {
  readonly type = LibsStoreActionsEnum.SetCategories;
  readonly categories: Category[];

  constructor(categories: Category[]) {
    this.categories = categories;
  }
}

export class SetSelectedCategoryAction implements Action {
  readonly type = LibsStoreActionsEnum.SetSelectedCategory;
  readonly selectedCategory: Category;

  constructor(selectedCategory: Category) {
    this.selectedCategory = selectedCategory;
  }
}

export type LibsStoreActionTypes =
  SetCategoriesAction
  | SetSelectedCategoryAction

