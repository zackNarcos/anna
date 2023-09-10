import {Category, LibsStoreActionsEnum} from "@anna/core";

export interface LibsStoreReducerState {
  categories: Category[],
  selectedCategory: Category,
  error?: any;
}

export const libsStoreInitialState: LibsStoreReducerState = {
  categories: [],
  selectedCategory: {
    name: 'Tous les produits',
  },
  error:null
}

export function libsStoreReducer(state = libsStoreInitialState, action: any): LibsStoreReducerState {
  switch (action.type){
    case LibsStoreActionsEnum.SetCategories:
      return {
        ...state,
        categories: action.categories
      };

    case LibsStoreActionsEnum.SetSelectedCategory:
      return {
        ...state,
        selectedCategory: action.selectedCategory
      }
    default:
      return state;
  }
}
