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
  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
    this.addProductForm = new FormGroup<any>({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      productImage: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('this.addProductForm.value', this.addProductForm.value)
    this.storeService.addProduct(this.addProductForm.value);
    this.router.navigate(['/produits']);
  }

}
