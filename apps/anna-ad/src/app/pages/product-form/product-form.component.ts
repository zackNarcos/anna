import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../store/store.service";
import {Router} from "@angular/router";
import {ProductService} from "@anna/core";

@Component({
  selector: 'anna-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  addProductForm: FormGroup;
  categories$ = this.storeService.getCategories();
  selectedFile1!: File;
  selectedFile2!: File;
  selectedFile3!: File;
  wrongData = false;
  wrongDataMessage = 'Une erreur est survenue lors de la création du produit';

  constructor(
    private storeService: StoreService,
    private router: Router,
    private productService: ProductService
  ) {
    this.addProductForm = new FormGroup<any>({
      name: new FormControl('produit', [Validators.required]),
      description: new FormControl('desc', [Validators.required]),
      price: new FormControl(5000, [Validators.required]),
      productImage1: new FormControl(null, [Validators.required]),
      productImage2: new FormControl(null, [Validators.required]),
      productImage3: new FormControl(null, [Validators.required]),
      quantity: new FormControl(2, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
    });
  }

  onFileSelected1(event: any) {
    this.selectedFile1 = event.target.files[0];
  }

  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0];
  }

  onFileSelected3(event: any) {
    this.selectedFile3 = event.target.files[0];
  }

  onSubmit() {
    const productImages = [this.selectedFile1, this.selectedFile2, this.selectedFile3];
    const product = this.addProductForm.value;
    product.productImages = productImages;
    this.productService.createProduct(product).subscribe((data:any) => {
      console.log(data);
      if (data['error']) {
        this.wrongData = true;
        this.wrongDataMessage = data['error'];
      } else {
        this.wrongData = false;
        this.storeService.addProduct(product);
        this.router.navigate(['/produits']);
      }
    })
  }

}
