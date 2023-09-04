import {InjectionToken, NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CategoryStoreEffects} from "./category-store.effects";
import {categoryStoreInitialState, categoryStoreReducer} from "./category-store.reducer";
// import {CategoryService} from "@anna/core";
import {categoryConfig} from "../category.config";

const featureStoreKey = categoryConfig.store.key;

export const categoryFeatureStoreKeyToken = new InjectionToken(`FeatureStoreKeyInjectionToken:${featureStoreKey}`);
export const categoryFeatureStoreInitialStateToken = new InjectionToken<any>(
  `FeatureStoreInitialStateInjectionToken:${featureStoreKey}`
);

@NgModule({
  providers: [
    {
      provide: categoryFeatureStoreKeyToken,
      useValue: featureStoreKey,
    },
    {
      provide: categoryFeatureStoreInitialStateToken,
      useValue: categoryStoreInitialState,
    },
  ],
  imports: [
    StoreModule.forFeature(featureStoreKey, categoryStoreReducer),
    EffectsModule.forFeature([CategoryStoreEffects]),
  ],
})
export class CategoryStoreModule {}
