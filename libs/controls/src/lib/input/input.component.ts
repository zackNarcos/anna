import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'anna-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
  @Input() label!: string;
  @Input() type!: string;
  @Input() labelPosition!: string;
  @Input() placeholder!: string;

  onChange: any = () => {};
  onTouch: any = () => {};
  value!: string;
  @Input() border = true;
  @Input() width: string | number = '100%';

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch(fn);
  }

  writeValue(obj: any): void {
    this.onChange(obj);
  }

  change(value: any) {
    this.onChange(value);
  }
}
