import { Route } from '@angular/router';
import {LayoutComponent} from "@anna/fe/ui";

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      }
    ]
  }
];
