import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ControlsModule } from '@anna/fe/controls';
import { FooterComponent } from './footer/footer.component';
import { ExpensionPanelComponent } from './expension-panel/expension-panel.component';
import { AdSideBarComponent } from './ad-side-bar/ad-side-bar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AnnonceComponent,
    TopHeaderComponent,
    FooterComponent,
    ExpensionPanelComponent,
    AdSideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ControlsModule,
    RouterOutlet,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    AnnonceComponent,
    TopHeaderComponent,
    ExpensionPanelComponent,
  ],
})
export class UiModule {}
