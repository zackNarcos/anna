import {InjectionToken, NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductStoreEffects} from "./product-store.effects";
import {productStoreInitialState, productStoreReducer} from "./product-store.reducer";
import {CategoryService} from "@anna/core";
import {productConfig} from "../product.config";
// import {CategoryService} from "@anna/core";

const featureStoreKey = productConfig.store.key;

export const productFeatureStoreKeyToken = new InjectionToken(`FeatureStoreKeyInjectionToken:${featureStoreKey}`);
export const productFeatureStoreInitialStateToken = new InjectionToken<any>(
  `FeatureStoreInitialStateInjectionToken:${featureStoreKey}`
);

@NgModule({
  providers: [
    {
      provide: productFeatureStoreKeyToken,
      useValue: featureStoreKey,
    },
    {
      provide: productFeatureStoreInitialStateToken,
      useValue: productStoreInitialState,
    },
  ],
  imports: [
    StoreModule.forFeature(featureStoreKey, productStoreReducer),
    EffectsModule.forFeature([ProductStoreEffects]),
  ],
})
export class ProductStoreModule {}
