import {Component, Input} from '@angular/core';

@Component({
  selector: 'anna-bloc-small-category',
  templateUrl: './bloc-small-category.component.html',
  styleUrls: ['./bloc-small-category.component.scss'],
})
export class BlocSmallCategoryComponent {
  @Input() category: any;
  @Input() backendUrl!: string;
}
