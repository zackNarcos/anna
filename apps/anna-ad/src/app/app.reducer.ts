import { ActionReducerMap } from '@ngrx/store';
import {StoreReducerState} from "./store/store.reducer";

export interface AppState {
  store: StoreReducerState;
}

export const appReducer: ActionReducerMap<AppState> = {} as any;
// export const metaReducersProvider = getMetaReducersProvider();
