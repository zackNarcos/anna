import { Component } from '@angular/core';

@Component({
  selector: 'anna-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories =  [
    {
      title: 'Hauts',
      imageUrl: 'CATEGORYCAROUSEL_FR_TOPS_9.webp',
      path: 'tops',
    },
    {
      title: 'Robes',
      imageUrl: 'CATEGORYCAROUSEL_FR_DRESSES_10.webp',
      path: 'robes',
    },
    {
      title: 'tendances crochets',
      imageUrl: 'CATEGORYCAROUSEL_FR_CROCHET.webp',
      path: 'jeans',
    },
    {
      title: 'Jupes',
      imageUrl: 'CATEGORYCAROUSEL_FR_SHOES_2.webp',
      path: 'shoes',
    }
  ];
}
