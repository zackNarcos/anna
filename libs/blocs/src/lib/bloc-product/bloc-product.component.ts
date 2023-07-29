import { Component } from '@angular/core';

@Component({
  selector: 'anna-bloc-product',
  templateUrl: './bloc-product.component.html',
  styleUrls: ['./bloc-product.component.scss'],
})
export class BlocProductComponent {
  product = {
    name: 'BARBIE - ROBE BANDEAU COURTE CÔTELÉE',
    price: 100,
    description: 'Anna is a great product',
    image: 'https://media.boohoo.com/i/boohoo/gzz61203_baby%20pink_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
  }
}
