import {appConfig} from "../app.config";
import {InjectionToken, NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreEffects} from "./store.effects";
import {storeInitialState, storeReducer} from "./store.reducer";
import {CategoryService} from "@anna/core";
// import {CategoryService} from "@anna/core";

const featureStoreKey = appConfig.store.key;

export const appFeatureStoreKeyToken = new InjectionToken(`FeatureStoreKeyInjectionToken:${featureStoreKey}`);
export const appFeatureStoreInitialStateToken = new InjectionToken<any>(
  `FeatureStoreInitialStateInjectionToken:${featureStoreKey}`
);

@NgModule({
  providers: [
    CategoryService,
    {
      provide: appFeatureStoreKeyToken,
      useValue: featureStoreKey,
    },
    {
      provide: appFeatureStoreInitialStateToken,
      useValue: storeInitialState,
    },
    // ProductService,
    // AdminService,
    // UserService,
    // CartService
  ],
  imports: [
    StoreModule.forFeature(featureStoreKey, storeReducer),
    EffectsModule.forFeature([StoreEffects]),
  ],
})
export class AppStoreModule {}
