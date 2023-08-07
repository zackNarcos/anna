import {Routes} from '@angular/router';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }]
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/authentication-layout/authentication-layout.module').then(x => x.AuthenticationLayoutModule)
  },
  {
    path: '**',
    redirectTo: 'categories'
  }
]
