import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Category, CategoryService, Product, ProductService} from "@anna/core";
import {
  AddCategoryFailureAction,
  AddCategorySuccessAction,
  AddProductFailureAction,
  AddProductSuccessAction,
  DeleteCategoryFailureAction,
  DeleteCategorySuccessAction, DeleteProductFailureAction, DeleteProductSuccessAction,
  LoadCategoriesFailureAction,
  LoadCategoriesSuccessAction, LoadProductsFailureAction, LoadProductsSuccessAction,
  StoreActionsTypes,
  UpdateCategoryFailureAction,
  UpdateCategorySuccessAction, UpdateProductFailureAction, UpdateProductSuccessAction
} from "./store.actions";
import {catchError, map, of, switchMap} from "rxjs";
@Injectable()
export class StoreEffects {
  constructor(
    private actions$: Actions,
    // private productService: ProductService,
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {
  }

  //TODO: debug this effect to see why it's not working with the switchMap
  loadCategories$ = createEffect(() => this.actions$.pipe(
      ofType(StoreActionsTypes.LoadCategories),
      (() => this.categoryService.getCategories()
        .pipe(
          map((categories: any) => {
            return new LoadCategoriesSuccessAction(categories.categories);
          }),
          catchError((err) => of(new LoadCategoriesFailureAction(err)))
        )
      )
    )
  );

  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActionsTypes.AddCategory),
      switchMap((action: Category) =>
        this.categoryService.createCategory(action).pipe(
          map((data: any) => {
            return new AddCategorySuccessAction(data.category);
          }),
          catchError((err) => of(new AddCategoryFailureAction(err)))
        )
      )
    )
  );

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActionsTypes.UpdateCategory),
      switchMap((action: Category) =>
        this.categoryService.updateCategory(action).pipe(
          map((category) => {
            return new UpdateCategorySuccessAction(category);
          }),
          catchError((err) => of(new UpdateCategoryFailureAction(err)))
        )
      )
    )
  );

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActionsTypes.DeleteCategory),
      switchMap((action: any) => {
          return this.categoryService.deleteCategory(action.category).pipe(
            map((data:any) => {
              return new DeleteCategorySuccessAction(data.category);
            }),
            catchError((err) => of(new DeleteCategoryFailureAction(err)))
          );
        }
      )
    )
  );

  loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType(StoreActionsTypes.LoadProducts),
      (() => this.productService.getProducts()
        .pipe(
          map((products: any) => {
            return new LoadProductsSuccessAction(products.products);
          }),
          catchError((err) => of(new LoadProductsFailureAction(err)))
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActionsTypes.AddProduct),
      map((action: any) =>
        new AddProductSuccessAction(action.product)
      )
      //   return this.storeService.addProduct(action.product).pipe(
      //
      // )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActionsTypes.UpdateProduct),
      switchMap((action: any) =>
        this.productService.updateProduct(action.product).pipe(
          map((data: any) => {
            return new UpdateProductSuccessAction(data.product);
          }),
          catchError((err) => of(new UpdateProductFailureAction(err)))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActionsTypes.DeleteProduct),
      switchMap((action: any) => {
          return this.productService.deleteProduct(action.product).pipe(
            map((data: any) => {
              return new DeleteProductSuccessAction(action.product);
            }),
            catchError((err) => of(new DeleteProductFailureAction(err)))
          );
        }
      )
    )
  );
}
