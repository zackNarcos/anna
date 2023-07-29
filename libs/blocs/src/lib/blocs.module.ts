import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie/categorie.component';
import { RouterLink } from '@angular/router';
import { BlocProductComponent } from './bloc-product/bloc-product.component';

@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [CategorieComponent, BlocProductComponent],
  exports: [CategorieComponent, BlocProductComponent],
})
export class BlocsModule {}
