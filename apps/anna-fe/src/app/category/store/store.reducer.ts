import {Admin, Category, Product} from "@anna/core";
import {StoreActionsTypes} from "./store.actions";

export interface StoreReducerState {
  categories: Category[];
  products: Product[];
  isLoadMore: boolean;
  isUpdating: boolean;
  admin: Admin | null;
  error?: any;
}

export const storeInitialState: StoreReducerState = {
  categories: [],
  products: [],
  isLoadMore: false,
  isUpdating: false,
  admin: null,
  error: null,
}

export function storeReducer(state = storeInitialState, action: any): StoreReducerState {
  switch (action.type) {
    case StoreActionsTypes.LoadCategories:
      return {
        ...state,
        isLoadMore: true,
      };
    case StoreActionsTypes.LoadCategoriesSuccess:
      return {
        ...state,
        categories: action.categories,
        isLoadMore: false,
        error: null,
      };
    case StoreActionsTypes.LoadCategoriesFailure:
      return {
        ...state,
        isLoadMore: false,
        error: action.error,
      };
    case StoreActionsTypes.LoadProducts:
      return {
        ...state,
        isLoadMore: true,
      };
    case StoreActionsTypes.LoadProductsSuccess:
      return {
        ...state,
        products: action.products,
        isLoadMore: false,
        error: null,
      };
    case StoreActionsTypes.LoadProductsFailure:
      return {
        ...state,
        isLoadMore: false,
        error: action.error,
      };
    case StoreActionsTypes.AddCategory:
      return {
        ...state,
        isUpdating: true,
      };
    case StoreActionsTypes.AddCategorySuccess:
      return {
        ...state,
        categories: [...state.categories, action.category],
        isUpdating: false,
      };
    case StoreActionsTypes.AddCategoryFailure:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      };
    case StoreActionsTypes.DeleteCategory:
      return {
        ...state,
        isUpdating: true,
      };
    case StoreActionsTypes.DeleteCategorySuccess:
      return {
        ...state,
        categories: state.categories.filter((category) =>
          category._id !== action.category._id
        ),
        isUpdating: false,
      };
    case StoreActionsTypes.DeleteCategoryFailure:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      };
    case StoreActionsTypes.DeleteProduct:
      return {
        ...state,
        isUpdating: true,
      };
    case StoreActionsTypes.DeleteProductSuccess:
      return {
        ...state,
        products: state.products.filter((product) =>
          product._id !== action.product._id
        ),
        isUpdating: false,
      };
    case StoreActionsTypes.DeleteProductFailure:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      };
    case StoreActionsTypes.AddProduct:
      return {
        ...state,
        isUpdating: true,
      };
    case StoreActionsTypes.AddProductSuccess:
      return {
        ...state,
        products: [...state.products, action.product],
        isUpdating: false,
      };
    case StoreActionsTypes.AddProductFailure:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      };
    case StoreActionsTypes.UpdateCategory:
      return {
        ...state,
        isUpdating: true,
      };
    case StoreActionsTypes.UpdateCategorySuccess:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category._id === action.category._id) {
            return action.category;
          }
          return category;
        }),
        isUpdating: false,
      };
    case StoreActionsTypes.UpdateCategoryFailure:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      };
    case StoreActionsTypes.UpdateProduct:
      return {
        ...state,
        isUpdating: true,
      };
    case StoreActionsTypes.UpdateProductSuccess:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.product._id) {
            return action.product;
          }
          return product;
        }),
        isUpdating: false,
      };
    case StoreActionsTypes.UpdateProductFailure:
      return {
        ...state,
        isUpdating: false,
        error: action.error,
      };
    case StoreActionsTypes.Logout:
      return {
        ...state,
        admin: null,
      }
    case StoreActionsTypes.SetAdmin:
      return {
        ...state,
        admin: action.admin,
      }
    default:
      return state;
  }
}
