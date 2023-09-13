import { Component } from '@angular/core';
import {ProductStoreService} from "../store/product-store.service";
import {Category, LibsStoreService, SortEnum} from "@anna/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'anna-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  display = 3;
  products$ = this.productStoreService.getFilteredProducts();
  selectedCategory$ = this.libsStoreService.getSelectedCategory();
  sortEnum = SortEnum;
  sortControl: FormControl = new FormControl(SortEnum.NEWEST);
  constructor(
    private productStoreService: ProductStoreService,
    private libsStoreService: LibsStoreService
  ) {
    this.selectedCategory$.subscribe((category) => {
      this.filterProducts(category);
    });
    this.sortControl.valueChanges.subscribe((value) => {
      this.selectedCategory$.subscribe((category) => {
        this.filterProducts(category);
      });
    });
  }
  sizes = [
    { id: 1, name: '32' },
    { id: 2, name: '34' },
    { id: 3, name: '36' },
    { id: 4, name: '38' },
    { id: 5, name: '40' },
    { id: 6, name: '42' },
    { id: 7, name: '44' },
    { id: 8, name: '46' },
    { id: 9, name: '48' },
    { id: 10, name: '50' },
    { id: 11, name: '52' },
    { id: 12, name: '54' },
    { id: 13, name: '56' },
  ];

  colors = [
    { id: 1, name: 'Blanc' },
    { id: 2, name: 'Noir' },
    { id: 3, name: 'Bleu' },
    { id: 4, name: 'Rouge' },
    { id: 5, name: 'Vert' },
    { id: 6, name: 'Jaune' },
    { id: 7, name: 'Orange' },
    { id: 8, name: 'Violet' },
    { id: 9, name: 'Rose' },
    { id: 10, name: 'Marron' },
    { id: 11, name: 'Gris' },
  ];

  prix = [
    { id: 1, name: '0-10000 Fcfa' },
    { id: 2, name: '10000-20000 Fcfa' },
    { id: 3, name: '20000-30000 Fcfa' },
    { id: 4, name: '30000-40000 Fcfa' },
    { id: 5, name: '40000-50000 Fcfa' },
    { id: 6, name: '50000-60000 Fcfa' },
    { id: 7, name: '60000-70000 Fcfa' },
    { id: 8, name: '70000-80000 Fcfa' }
  ];

  toggleDisplay(display: number) {
    this.display = display;
  }

  filterProducts(category: Category) {
    const filter = {
      size: [],
      color: [],
      price: '',
      sort: this.sortControl.value,
      name: '',
      category: category
    };
    console.log('category',filter)
    this.productStoreService.setFilterProducts(filter);
  }
}
