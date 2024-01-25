import {Component, Input} from '@angular/core';
import {AnnonceComponent} from "../annonce/annonce.component";
import {TopHeaderComponent} from "../top-header/top-header.component";
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'anna-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    AnnonceComponent,
    TopHeaderComponent,
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ]
})
export class LayoutComponent {
  @Input() categories: any[] = [];
}
