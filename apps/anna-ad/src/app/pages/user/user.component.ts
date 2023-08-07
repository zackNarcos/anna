import { Component } from '@angular/core';
import {AdminService} from "@anna/core";
import {StoreService} from "../../store/store.service";

@Component({
    selector: 'user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent{
  admin$ = this.storeService.getAdmin();
    constructor(
      private adminService: AdminService,
      private storeService: StoreService,
    ) {}

}
