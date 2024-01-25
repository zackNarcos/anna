import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'anna-input-checkbok',
  templateUrl: './input-checkbok.component.html',
  styleUrls: ['./input-checkbok.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCheckbokComponent,
      multi: true,
    },
  ],
  imports: [
    FormsModule
  ]
})
export class InputCheckbokComponent implements ControlValueAccessor {
  @Input() id = 'checkbox' + Math.random().toString(36).substring(7);
  @Input() label = '';
  checked = false;

  onChange: any = (value: boolean) => {};
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: boolean): void {
    this.checked = obj;
  }

  change(value: boolean) {
    this.onChange(value);
  }
}
