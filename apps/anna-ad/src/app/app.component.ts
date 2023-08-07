import { Component } from '@angular/core';
import {StoreService} from "./store/store.service";

@Component({
  selector: 'anna-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'anna-ad';

  constructor(
    private storeService: StoreService,
  ) {
    this.storeService.loadAllCategories();
    this.storeService.loadAllProducts();
  }
}
