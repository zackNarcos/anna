import {createSelector, MemoizedSelector} from "@ngrx/store";
import {libsStoreStateInterface} from "./libs-store-state.interface";
import {LibsStoreReducerState} from "./libs-store.reducer";


export const libsStoreState = (state: libsStoreStateInterface) => state.libs

const selectCategories = createSelector(
  libsStoreState,
  (state: LibsStoreReducerState) => state.categories || []
);

const selectErrors = createSelector(
  libsStoreState,
  (state: LibsStoreReducerState) => state.error || null
)

const selectSelectedCategory = createSelector(
  libsStoreState,
  (state: LibsStoreReducerState) => state.selectedCategory || null
)

export const libsSelectors = {
  selectErrors,
  selectCategories,
  selectSelectedCategory
}
