import {Component, Input} from '@angular/core';

@Component({
  selector: 'anna-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() categories: any[] = [];

  mainMenu: any[] = [];
  
  constructor() {
    this.mainMenu = this.categories.map((category) => {
      return {
        label: category.name,
        link: `/categories/${category._id}`,
        class: 'category'
      };
    });
  }
}
