import { Component } from '@angular/core';

@Component({
  selector: 'anna-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mainMenu = [
    { label: 'nouveautés', link: '/nouveautes', class: 'nouveautes' },
    { label: 'vêtements', link: '/vetements', class: 'vetements' },
    { label: 'robes', link: '/robes', class: 'robes' },
    { label: 'tops', link: '/tops', class: 'tops' },
    { label: 'chaussures & accessoires', link: '/chaussures', class: 'chaussures' },
    { label: 'promotions', link: '/promotions' , class: 'promotions'}
  ];
}
