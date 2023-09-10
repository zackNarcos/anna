import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {libsStoreStateInterface} from "./libs-store-state.interface";
import {Category, SetSelectedCategoryAction} from "@anna/core";
import {SetCategoriesAction} from "./libs-store.actions";
import {Observable} from "rxjs";
import {libsSelectors} from "./libs-store.selectors";

@Injectable({
  providedIn: 'root'
})
export class LibsStoreService {
  private readonly store: Store<libsStoreStateInterface>;

  constructor(
    store: Store<libsStoreStateInterface>
  ) {
    this.store = store
  }

  setCategories(categories: Category[]) {
    this.store.dispatch(new SetCategoriesAction(categories))
  }

  getCategories(): Observable<Category[]> {
    return this.store.select(libsSelectors.selectCategories)
  }

  setSelectedCategory(category: Category){
    return this.store.dispatch(new SetSelectedCategoryAction(category));
  }

  getSelectedCategory(): Observable<Category> {
    return this.store.select(libsSelectors.selectSelectedCategory)
  }
}
