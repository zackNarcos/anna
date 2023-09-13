import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CategoryComponent } from '../category/category/category.component';
import { UiModule } from '@anna/fe/ui';
import { ControlsModule } from '@anna/fe/controls';
import { BlocsModule } from '@anna/fe/blocs';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    SideBarComponent,
    CategoryComponent,
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        UiModule,
        ControlsModule,
        BlocsModule,
        ReactiveFormsModule,
    ],
})
export class ProductModule {}
