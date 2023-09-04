import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./app.reducer";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ProductStoreModule} from "./product/store/product-store.module";
import {HttpClientModule} from "@angular/common/http";
import {CategoryStoreModule} from "./category/store/category-store.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: false,
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      trace: true, // Trace changes over time
    }),
    ProductStoreModule,
    CategoryStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
