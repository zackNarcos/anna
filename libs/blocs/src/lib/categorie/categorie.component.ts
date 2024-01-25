import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'anna-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class CategorieComponent {
  @Input() imageUrl!: string;
  @Input() path!: string;
  @Input() title!: string;
}
