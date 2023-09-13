import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService, SortEnum} from "@anna/core";
import {
  LoadProductsFailureAction, LoadProductsSuccessAction,
  ProductStoreActionsTypes, SetFilteredProductsAction,
} from "./product-store.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ProductStoreService} from "./product-store.service";
@Injectable()
export class ProductStoreEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private productStoreService: ProductStoreService
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

  filterProducts$ = createEffect(() => this.actions$.pipe(
      ofType(ProductStoreActionsTypes.SetFilterProducts),
      switchMap((action: any) => {
        return this.productStoreService.getProducts()
          .pipe(
            map((products: any) => {
              const filter = action.filter;
              let filteredProducts = products;
              if (filter.sort) {
                filteredProducts = filteredProducts.sort((a: any, b: any) => {
                  if (filter.sort === SortEnum.NEWEST) {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                  } else if (filter.sort === SortEnum.ASC) {
                    return a.price - b.price;
                  } else if (filter.sort === SortEnum.DESC) {
                    return b.price - a.price;
                  } else {
                    return a.name.localeCompare(b.name);
                  }
                });
              }
              return new SetFilteredProductsAction(filteredProducts);
            })
          )
      })
  ));
}
