import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../store/store.service";
import {Router} from "@angular/router";

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

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
    this.addProductForm = new FormGroup<any>({
      name: new FormControl('produit', [Validators.required]),
      description: new FormControl('desc', [Validators.required]),
      price: new FormControl(5000, [Validators.required]),
      productImage1: new FormControl(null, [Validators.required]),
      productImage2: new FormControl(null, [Validators.required]),
      productImage3: new FormControl(null, [Validators.required]),
      quantity: new FormControl(2, [Validators.required]),
      category: new FormControl('64d01edab093386af0df5d94', [Validators.required]),
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
    this.storeService.addProduct(this.addProductForm.value);
    this.router.navigate(['/produits']);
  }

}
