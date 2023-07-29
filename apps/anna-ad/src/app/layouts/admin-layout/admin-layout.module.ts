import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserComponent }            from '../../pages/user/user.component';
import { ProductListComponent }           from '../../pages/product-list/product-list-component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import {ProductFormComponent} from "../../pages/product-form/product-form.component";
import {ProductComponent} from "../../pages/product/product.component";
import {CategoryListComponent} from "../../pages/category-list/category-list.component";
import {CategoryFormComponent} from "../../pages/category-form/category-form.component";
import {CategoryComponent} from "../../pages/category/category.component";

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    // NgbModule
  ],
  declarations: [
    UserComponent,
    IconsComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CategoryComponent,
  ]
})

export class AdminLayoutModule {}
