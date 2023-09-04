import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie/categorie.component';
import { RouterLink } from '@angular/router';
import { BlocProductComponent } from './bloc-product/bloc-product.component';
import { BlocSmallCategoryComponent } from './bloc-small-category/bloc-small-category.component';

@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [
    CategorieComponent,
    BlocProductComponent,
    BlocSmallCategoryComponent,
  ],
    exports: [CategorieComponent, BlocProductComponent, BlocSmallCategoryComponent],
})
export class BlocsModule {}
