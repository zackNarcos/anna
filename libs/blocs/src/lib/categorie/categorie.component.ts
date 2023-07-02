import {Component, Input} from '@angular/core';

@Component({
  selector: 'anna-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent {
  @Input() imageUrl!: string;
  @Input() path!: string;
  @Input() title!: string;
}
