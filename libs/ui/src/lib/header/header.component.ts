import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Category, coreConfig, LibsStoreService} from "@anna/core";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'anna-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class HeaderComponent {
  categories$ = this.libsStoreService.getCategories();
  categories = [
    { id: 1, name: 'Telephone' },
    { id: 2, name: 'Ordinateur' },
    { id: 3, name: 'Tablette' },
    { id: 4, name: 'Accessoire' },
  ];
  defaultCategory = {
    name: coreConfig.allCategories,
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
