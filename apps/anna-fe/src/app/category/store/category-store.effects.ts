import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CategoryService} from "@anna/core";
import {catchError, map, of} from "rxjs";
import {LoadCategoriesFailureAction, LoadCategoriesSuccessAction} from "./category-store.actions";
import {CategoryStoreActionsTypes} from "./category-store.actions";
@Injectable()
export class CategoryStoreEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
  ) {
  }

  //TODO: debug this effect to see why it's not working with the switchMap
  loadCategories$ = createEffect(() => this.actions$.pipe(
      ofType(CategoryStoreActionsTypes.LoadCategories),
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
}
