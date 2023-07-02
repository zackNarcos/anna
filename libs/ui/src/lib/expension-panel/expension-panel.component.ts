import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'anna-expension-panel',
  templateUrl: './expension-panel.component.html',
  styleUrls: ['./expension-panel.component.scss'],
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
