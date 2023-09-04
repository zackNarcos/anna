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
  product: any;
  backendUrl = environment.backend + '/uploads/'
  constructor(
    private productStoreService: ProductStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {
    this.route.params.subscribe(params => {
      const name = params['productName'];
      this.products$.subscribe(products => {
        this.product = products.find(product => product.name === name);
      });
    });
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
