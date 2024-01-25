import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'anna-expension-panel',
  templateUrl: './expension-panel.component.html',
  styleUrls: ['./expension-panel.component.scss'],
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgIf
  ]
})
export class ExpensionPanelComponent {
  @ContentChild('title', { static: true }) titleRef!: TemplateRef<unknown>;
  @ContentChild('body', { static: true }) bodyRef!: TemplateRef<unknown>;

  @Input()
  title!: string;

  @Input()
  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
