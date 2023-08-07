import { Component } from '@angular/core';
import {StoreService} from "../../store/store.service";
import {Category} from "@anna/core";

@Component({
  selector: 'anna-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {

  categories$ = this.storeService.getCategories();

  constructor(
    private storeService: StoreService,
  ) {
  }

  deleteCategory(category: Category) {
    if (category) {
      this.storeService.deleteCategory(category);
    }
  }

  trackByFn(index: number, item: Category) {
    return item._id;
  }
}
