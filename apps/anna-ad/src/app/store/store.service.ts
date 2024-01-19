import {Injectable} from "@angular/core";
import {AppState} from "../app.reducer";
import {Store} from "@ngrx/store";
import {
  AddCategoryAction, AddProductAction, AddProductSuccessAction, DeleteCategoryAction, DeleteProductAction,
  LoadCategoriesAction,
  LoadProductsAction, LogoutAction, SetAdminAction,
  UpdateCategoryAction,
  UpdateProductAction
} from "./store.actions";
import {Admin, Category, Product} from "@anna/core";
import {storeSelectors} from "./store.selectors";
import {storeReducer} from "./store.reducer";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.store = store;
  }

  getIsUpdating = () => this.store.select(state => state.store.isUpdating ?? false);

  getIsLoadMore = () => this.store.select(state => state.store.isLoadMore ?? false);

  loadAllProducts = () => this.store.dispatch(new LoadProductsAction());

  loadAllCategories = () => this.store.dispatch(new LoadCategoriesAction());

  updateProduct = (product: Product) => this.store.dispatch(new UpdateProductAction(product));

  updateCategory = (category: Category) => this.store.dispatch(new UpdateCategoryAction(category));

  deleteProduct = (product: Product) => this.store.dispatch(new DeleteProductAction(product));

  deleteCategory = (category: Category) => this.store.dispatch(new DeleteCategoryAction(category));

  addProduct = (product: Product) => this.store.dispatch(new AddProductAction(product));

  addCategory = (category: Category) => this.store.dispatch(new AddCategoryAction(category));

  addProductSuccess = (product: Product) => this.store.dispatch(new AddProductSuccessAction(product));

  getCategories = () => this.store.select(storeSelectors.selectCategories);

  getProducts = () => this.store.select(storeSelectors.selectProducts);

  logout = () => this.store.dispatch(new LogoutAction());

  getAdmin = () => this.store.select(storeSelectors.selectAdmin);

  setAdmin = (admin: Admin) => this.store.dispatch(new SetAdminAction(admin));
}
