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
  selectedFile!: File;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
    this.addProductForm = new FormGroup<any>({
      name: new FormControl('produit', [Validators.required]),
      description: new FormControl('desc', [Validators.required]),
      price: new FormControl(5000, [Validators.required]),
      productImage: new FormControl(null, [Validators.required]),
      quantity: new FormControl(2, [Validators.required]),
      category: new FormControl('64d01edab093386af0df5d94', [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const product = this.addProductForm.value;
    product.productImage = this.selectedFile;
    this.storeService.addProduct(this.addProductForm.value);
    this.router.navigate(['/produits']);
  }

}
