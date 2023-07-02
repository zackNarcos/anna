import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie/categorie.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterLink],
    declarations: [CategorieComponent],
    exports: [
        CategorieComponent
    ]
})
export class BlocsModule {}
