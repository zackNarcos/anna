import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search/input-search.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { InputCheckbokComponent } from './input-checkbok/input-checkbok.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [InputSearchComponent, InputComponent, InputCheckbokComponent],
  exports: [InputSearchComponent, InputComponent, InputCheckbokComponent],
})
export class ControlsModule {}
