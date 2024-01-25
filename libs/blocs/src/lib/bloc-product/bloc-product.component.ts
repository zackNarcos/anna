import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {StateEnum} from "@anna/core";
// import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'anna-bloc-product',
  templateUrl: './bloc-product.component.html',
  styleUrls: ['./bloc-product.component.scss'],
  standalone: true,
  imports: [
    NgIf
  ]
})
export class BlocProductComponent {
  @Input()
  product!: any;
  // imagePath = environment.backend + '/uploads/';
  imagePath = 'assets/images/products/';
  protected readonly StateEnum = StateEnum;
}
