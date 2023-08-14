import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {
  LoadProductsAction,
} from "./product-store.actions";
import {Product} from "@anna/core";
import {productStoreSelectors} from "./product-store.selectors";
import {AppState} from "../../app.reducer";

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.store = store;
  }

  loadAllProducts = () => this.store.dispatch(new LoadProductsAction());

  getProducts = () => this.store.select(productStoreSelectors.selectProducts);
}
