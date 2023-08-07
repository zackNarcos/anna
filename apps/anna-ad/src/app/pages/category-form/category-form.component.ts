import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../store/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'anna-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  addCategoryForm: FormGroup;
  constructor(
    private storeService: StoreService,
    private router: Router,
  ) {
    this.addCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const category = this.addCategoryForm.value;
    this.storeService.addCategory(category);
    this.router.navigate(['/categories']);
  }
}
