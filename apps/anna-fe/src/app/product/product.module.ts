import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CategoryComponent } from '../category/category/category.component';
// import { UiModule } from '@anna/fe/ui';
// import { ControlsModule } from '@anna/fe/controls';
// import { BlocsModule } from '@anna/fe/blocs';
import {ReactiveFormsModule} from "@angular/forms";
import {BlocProductComponent, BlocSmallCategoryComponent} from "@anna/fe/blocs";
import {InputCheckbokComponent} from "@anna/fe/controls";
import {ExpensionPanelComponent} from "@anna/fe/ui";

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
    // UiModule,
    // ControlsModule,
    // BlocsModule,
    ReactiveFormsModule,
    BlocSmallCategoryComponent,
    BlocProductComponent,
    InputCheckbokComponent,
    ExpensionPanelComponent,
  ],
})
export class ProductModule {}
