import { Component } from '@angular/core';

@Component({
  selector: 'anna-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  payementMethods = [
    {
      name: 'Visa',
      image: '/assets/images/payements/visa.png',
    },
    {
      name: 'Mastercard',
      image: '/assets/images/payements/mastercard.png',
    },
    {
      name: 'Paypal',
      image: '/assets/images/payements/paypal.png',
    },
    {
      name: 'Orange Money',
      image: '/assets/images/payements/orangemoney.png',
    },
    {
      name: 'Wave Mobile Money',
      image: '/assets/images/payements/wave.jpeg',
    }
  ];
}
