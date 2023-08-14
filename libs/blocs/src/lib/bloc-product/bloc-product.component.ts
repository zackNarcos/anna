import {Component, Input} from '@angular/core';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'anna-bloc-product',
  templateUrl: './bloc-product.component.html',
  styleUrls: ['./bloc-product.component.scss'],
})
export class BlocProductComponent {
  @Input()
  product!: any;
  imagePath = environment.backend + '/uploads/';
}
