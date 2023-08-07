import { Component, OnInit } from '@angular/core';
import {StoreService} from "../store/store.service";
import {Router} from "@angular/router";


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/produits',      title: 'Produits',          icon:'nc-bookmark-2',    class: '' },
    { path: '/categories',    title: 'Categories',        icon:'nc-tile-56',    class: '' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[] = [];

    constructor(
      private storeService: StoreService,
      private router: Router
    ) {
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  logout() {
    localStorage.clear();
    this.storeService.logout();
    this.router.navigate(['/auth/login']);
  }
}
