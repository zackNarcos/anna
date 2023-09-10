import {Component, Input} from '@angular/core';
import {Category, LibsStoreService} from "@anna/core";
import {Router} from "@angular/router";

@Component({
  selector: 'anna-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categories$ = this.libsStoreService.getCategories();
  defaultCategory = {
    name: 'Tous les produits',
  };
  constructor(
    private libsStoreService: LibsStoreService,
    private router: Router
  ) {
  }


  selectCategory(category: Category) {
    this.libsStoreService.setSelectedCategory(category);
    this.router.navigate(['produits']);
  }
}
