import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'anna-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class AnnonceComponent {
  $announce = [
    "IPHONE 12 PRO MAX 256GO",
    "IPHONE 15 DEJA DISPONIBLE",
    "NOUVELLE IPAD PRO 2021",
    "IPHONE 15 DEJA DISPONIBLE",
  ]

}
