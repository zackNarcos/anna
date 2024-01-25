import { Component } from '@angular/core';
import {ProductStoreService} from "../product/store/product-store.service";
import {Router} from "@angular/router";
import {Category, LibsStoreService} from "@anna/core";

@Component({
  selector: 'anna-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories =  [
    {
      id: 1,
      name: 'Téléphone',
      imageUrl: 'img.png',
      path: 'telephone',
    },
    {
      id: 2,
      name: 'Tablette',
      imageUrl: 'img_1.png',
      path: 'tablette',
    },
    {
      id: 3,
      name: 'Ordinateur',
      imageUrl: 'img_2.png',
      path: 'ordinateur',
    },
    {
      id: 4,
      name: 'Accessoires',
      imageUrl: 'img_3.png',
      path: 'accessoires',
    }
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
    description: "desc"
  }
  products$ = this.productStoreService.getProducts();
  constructor(
    private productStoreService: ProductStoreService,
    private router: Router,
    private libsStoreService: LibsStoreService,
  ) {
  }

  selectCategory(category: Category) {
    this.libsStoreService.setSelectedCategory(category);
    this.router.navigate(['produits']);
  }

  productClicked(product: any) {
    this.productStoreService.selectProduct(product)
    this.router.navigate(['produits', product.name])
  }
}
