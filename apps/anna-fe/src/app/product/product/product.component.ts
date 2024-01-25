import {Component, ElementRef} from '@angular/core';
import {ProductStoreService} from "../store/product-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'anna-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  products$ = this.productStoreService.getProducts();
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

  // product: any;
  product = {
    _id: 1,
    price: 5000,
    productImages: [
      "img.png",
      "img_1.png",
      "img_2.png",
    ],
    quantity: 2,
    category: this.categories[0],
    name: "Iphone 12",
    description: "desc"
  }
  // backendUrl = environment.backend + '/uploads/'
  backendUrl = 'assets/images/products/'
  backendUrlCat = 'assets/images/categories/'
  constructor(
    private productStoreService: ProductStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {
    // this.route.params.subscribe(params => {
    //   const name = params['productName'];
    //   this.products$.subscribe(products => {
    //     this.product = products.find(product => product.name === name);
    //   });
    // });
  }

  myFunction($event: any) {
    // Get the expanded image
    const expandImg = this.elementRef.nativeElement.querySelector("#expandedImg");

    // Use the same src in the expanded image as the image being clicked on from the grid
    const imgs = $event.target;

    expandImg.src = imgs.src;
  }

  addToCart(product: any) {

  }

  addToWishlist(product: any) {

  }
}
