import { Component } from '@angular/core';
import {ProductStoreService} from "../store/product-store.service";
import {Category, LibsStoreService, SortEnum, StateEnum} from "@anna/core";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

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
    private libsStoreService: LibsStoreService,
    private router: Router,
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

  categories = [
    { id: 1, name: 'Telephone' },
    { id: 2, name: 'Ordinateur' },
    { id: 3, name: 'Tablette' },
    { id: 4, name: 'Accessoire' },
    { id: 5, name: 'Autre' },
  ];

  produit = {
    _id: 1,
    price: 5000,
    productImages: [
      "img.png",
      "img_1.jpeg",
      "img_2.jpeg",
    ],
    quantity: 2,
    category: this.categories[0],
    name: "Iphone 12",
    description: "desc",
    state: StateEnum.NEW,
  }

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

  productClicked(product: any) {
    this.productStoreService.selectProduct(product)
    this.router.navigate(['produits', product.name])
  }
}
