import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'anna-bloc-small-category',
  templateUrl: './bloc-small-category.component.html',
  styleUrls: ['./bloc-small-category.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ]
})
export class BlocSmallCategoryComponent {
  @Input() category: any;
  @Input() backendUrl!: string;
}
