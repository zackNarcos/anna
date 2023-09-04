import {Component, Input} from '@angular/core';

@Component({
  selector: 'anna-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() categories: any[] = [];
}
