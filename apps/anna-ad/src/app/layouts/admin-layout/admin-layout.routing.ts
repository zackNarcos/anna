import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import { ProductListComponent } from '../../pages/product-list/product-list-component';
import { IconsComponent } from '../../pages/icons/icons.component';
import {ProductFormComponent} from "../../pages/product-form/product-form.component";
import {CategoryListComponent} from "../../pages/category-list/category-list.component";
import {CategoryFormComponent} from "../../pages/category-form/category-form.component";

export const AdminLayoutRoutes: Routes = [
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'produits',
      component: ProductListComponent,
    },
    {
      path: 'produits/ajouter',
      component: ProductFormComponent,
    },
    {
      path: 'categories',
      component: CategoryListComponent,
    },
    {
      path: 'categories/ajouter',
      component: CategoryFormComponent,
    },
    { path: 'icons', component: IconsComponent },
];
