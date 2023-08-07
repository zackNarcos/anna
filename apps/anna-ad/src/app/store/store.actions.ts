import {Admin, Category, Product} from "@anna/core";
import {Action} from "@ngrx/store";

export enum StoreActionsTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFailure = '[Products] Load Products Failure',

  UpdateProduct = '[Products] Update Product',
  UpdateProductSuccess = '[Products] Update Product Success',
  UpdateProductFailure = '[Products] Update Product Failure',

  DeleteProduct = '[Products] Delete Product',
  DeleteProductSuccess = '[Products] Delete Product Success',
  DeleteProductFailure = '[Products] Delete Product Failure',

  AddProduct = '[Products] Add Product',
  AddProductSuccess = '[Products] Add Product Success',
  AddProductFailure = '[Products] Add Product Failure',

  LoadCategories = '[Categories] Load Categories',
  LoadCategoriesSuccess = '[Categories] Load Categories Success',
  LoadCategoriesFailure = '[Categories] Load Categories Failure',

  UpdateCategory = '[Categories] Update Category',
  UpdateCategorySuccess = '[Categories] Update Category Success',
  UpdateCategoryFailure = '[Categories] Update Category Failure',

  DeleteCategory = '[Categories] Delete Category',
  DeleteCategorySuccess = '[Categories] Delete Category Success',
  DeleteCategoryFailure = '[Categories] Delete Category Failure',

  AddCategory = '[Categories] Add Category',
  AddCategorySuccess = '[Categories] Add Category Success',
  AddCategoryFailure = '[Categories] Add Category Failure',

  SetAdmin = '[Admin] Set Admin',

  Logout = '[Logout] Logout',
}

export class SetAdminAction implements Action {
  readonly type = StoreActionsTypes.SetAdmin;
  readonly admin: Admin;

  constructor(admin: Admin) {
    this.admin = admin;
  }
}

export class LoadProductsAction implements Action {
  readonly type = StoreActionsTypes.LoadProducts;
  readonly isLoadMore: boolean;

  constructor() {
    this.isLoadMore = true;
  }
}

export class LoadProductsSuccessAction implements Action {
  readonly type = StoreActionsTypes.LoadProductsSuccess;
  readonly products: Product[];
  readonly isLoadMore: boolean;

  constructor(products: Product[]) {
    this.products = products;
    this.isLoadMore = false
  }
}

export class LoadProductsFailureAction implements Action {
  readonly type = StoreActionsTypes.LoadProductsFailure;
  readonly error: any;
  readonly isLoadMore: boolean;

  constructor(error: any) {
    this.error = error;
    this.isLoadMore = false
  }
}


export class LoadCategoriesAction implements Action {
  readonly type = StoreActionsTypes.LoadCategories;
  readonly isLoadMore: boolean;

  constructor() {
    this.isLoadMore = true;
  }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = StoreActionsTypes.LoadCategoriesSuccess;
  readonly categories: Category[];
  readonly isLoadMore: boolean;

  constructor(categories: Category[]) {
    this.categories = categories;
    this.isLoadMore = false
  }
}

export class LoadCategoriesFailureAction implements Action {
  readonly type = StoreActionsTypes.LoadCategoriesFailure;
  readonly error: any;
  readonly isLoadMore: boolean;

  constructor(error: any) {
    this.error = error;
    this.isLoadMore = false
  }
}


export class UpdateCategoryAction implements Action {
  readonly type = StoreActionsTypes.UpdateCategory;
  readonly category: Category;
  readonly isUpdating: boolean;

  constructor(category: Category) {
    this.category = category;
    this.isUpdating = true;
  }
}


export class UpdateCategorySuccessAction implements Action {
  readonly type = StoreActionsTypes.UpdateCategorySuccess;
  readonly category: Category;
  readonly isUpdating: boolean;

  constructor(category: Category) {
    this.category = category;
    this.isUpdating = false;
  }
}


export class UpdateCategoryFailureAction implements Action {
  readonly type = StoreActionsTypes.UpdateCategoryFailure;
  readonly error: any;
  readonly isUpdating: boolean;

  constructor(error: any) {
    this.error = error;
    this.isUpdating = false;
  }
}

export class DeleteCategoryAction implements Action {
  readonly type = StoreActionsTypes.DeleteCategory;
  readonly category: Category;

  constructor(category: Category) {
    this.category = category;
  }
}


export class DeleteCategorySuccessAction implements Action {
  readonly type = StoreActionsTypes.DeleteCategorySuccess;
  readonly category: Category;

  constructor(category: Category) {
    this.category = category;
  }
}


export class DeleteCategoryFailureAction implements Action {
  readonly type = StoreActionsTypes.DeleteCategoryFailure;
  readonly error: any;

  constructor(error: any) {
    this.error = error;
  }
}

export class AddCategoryAction implements Action {
  readonly type = StoreActionsTypes.AddCategory;
  readonly category: Category;

  constructor(category: Category) {
    this.category = category;
  }
}


export class AddCategorySuccessAction implements Action {
  readonly type = StoreActionsTypes.AddCategorySuccess;
  readonly category: Category;

  constructor(category: Category) {
    this.category = category;
  }
}


export class AddCategoryFailureAction implements Action {
  readonly type = StoreActionsTypes.AddCategoryFailure;
  readonly error: any;

  constructor(error: any) {
    this.error = error;
  }
}

export class UpdateProductAction implements Action {
  readonly type = StoreActionsTypes.UpdateProduct;
  readonly product: Product;
  readonly isUpdating: boolean;

  constructor(product: Product) {
    this.product = product;
    this.isUpdating = true;
  }
}


export class UpdateProductSuccessAction implements Action {
  readonly type = StoreActionsTypes.UpdateProductSuccess;
  readonly product: Product;
  readonly isUpdating: boolean;

  constructor(product: Product) {
    this.product = product;
    this.isUpdating = false;
  }
}


export class UpdateProductFailureAction implements Action {
  readonly type = StoreActionsTypes.UpdateProductFailure;
  readonly error: any;
  readonly isUpdating: boolean;

  constructor(error: any) {
    this.error = error;
    this.isUpdating = false;
  }
}


export class DeleteProductAction implements Action {
  readonly type = StoreActionsTypes.DeleteProduct;
  readonly product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}


export class DeleteProductSuccessAction implements Action {
  readonly type = StoreActionsTypes.DeleteProductSuccess;
  readonly product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}


export class DeleteProductFailureAction implements Action {
  readonly type = StoreActionsTypes.DeleteProductFailure;
  readonly error: any;

  constructor(error: any) {
    this.error = error;
  }
}

export class AddProductAction implements Action {
  readonly type = StoreActionsTypes.AddProduct;
  readonly product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}


export class AddProductSuccessAction implements Action {
  readonly type = StoreActionsTypes.AddProductSuccess;
  readonly product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}


export class AddProductFailureAction implements Action {
  readonly type = StoreActionsTypes.AddProductFailure;
  readonly error: any;

  constructor(error: any) {
    this.error = error;
  }
}

export class LogoutAction implements Action {
  readonly type = StoreActionsTypes.Logout;
}

export type StoreActions =
  LoadProductsAction
  | LoadProductsSuccessAction
  | LoadProductsFailureAction
  | UpdateProductAction
  | UpdateProductSuccessAction
  | UpdateProductFailureAction
  | DeleteProductAction
  | DeleteProductSuccessAction
  | DeleteProductFailureAction
  | AddProductAction
  | AddProductSuccessAction
  | AddProductFailureAction
  | LoadCategoriesAction
  | LoadCategoriesSuccessAction
  | LoadCategoriesFailureAction
  | UpdateCategoryAction
  | UpdateCategorySuccessAction
  | UpdateCategoryFailureAction
  | DeleteCategoryAction
  | DeleteCategorySuccessAction
  | DeleteCategoryFailureAction
  | AddCategoryAction
  | AddCategorySuccessAction
  | AddCategoryFailureAction
  | SetAdminAction
  | LogoutAction;

