import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService, LocalStorageService} from "@anna/core";
import {Router} from "@angular/router";
import {StoreService} from "../../store/store.service";

@Component({
  selector: 'anna-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm : FormGroup;
  constructor(
    private adminService: AdminService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private storeService: StoreService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.adminService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (data:any) => {
          this.localStorageService.setItem('admin-token', data['admin-token']);
          this.localStorageService.setItem('adminId', data.adminId);
          this.loadAdmin();
          this.router.navigate(['/produits']);
        },
        error: (error) => {
          //TODO: show error message
          console.log(error);
        }
      })
    }
  }

  loadAdmin() {
    this.adminService.getMe().subscribe({
      next: (data:any) => {
        this.storeService.setAdmin(data);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
