import { Component } from '@angular/core';
import {InputSearchComponent} from "@anna/fe/controls";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'anna-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  standalone: true,
  imports: [
    InputSearchComponent,
    RouterLink
  ]
})
export class TopHeaderComponent {}
