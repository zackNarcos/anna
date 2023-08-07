import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationLayoutRoutingModule } from './authentication-layout-routing.module';
import { AuthenticationLayoutComponent } from './authentication-layout.component';
import {LoginComponent} from "../../pages/login/login.component";
import {RegisterComponent} from "../../pages/register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthenticationLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [CommonModule, AuthenticationLayoutRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthenticationLayoutModule {}
