import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {LoadCategoriesAction} from "./store.actions";
import {storeSelectors} from "./store.selectors";

@Injectable({
  providedIn: 'root'
})
export class CategoryStoreService {

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.store = store;
  }

  loadAllCategories = () => this.store.dispatch(new LoadCategoriesAction());

  getCategories = () => this.store.select(storeSelectors.selectCategories);
}
