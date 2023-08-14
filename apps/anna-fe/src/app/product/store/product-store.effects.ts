import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "@anna/core";
import {
  LoadProductsFailureAction, LoadProductsSuccessAction,
  ProductStoreActionsTypes,
} from "./product-store.actions";
import {catchError, map, of, switchMap} from "rxjs";
@Injectable()
export class ProductStoreEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
  ) {
  }

  loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType(ProductStoreActionsTypes.LoadProducts),
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
}
