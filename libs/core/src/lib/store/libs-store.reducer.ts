import {Category, LibsStoreActionsEnum} from "@anna/core";
import {coreConfig} from "../core.config";

export interface LibsStoreReducerState {
  categories: Category[],
  selectedCategory: Category,
  error?: any;
}

export const libsStoreInitialState: LibsStoreReducerState = {
  categories: [],
  selectedCategory: {
    name: coreConfig.allCategories
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
