import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Route, RouterModule} from "@angular/router";
import {BlocProductComponent, CategorieComponent} from "@anna/fe/blocs";
// import {BlocsModule} from "@anna/fe/blocs";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CategorieComponent,
    BlocProductComponent,
    // BlocsModule,
  ],
})
export class HomeModule {}
