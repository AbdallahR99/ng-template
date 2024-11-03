import { Component } from '@angular/core';
import { SHARED_MODULES } from '../../modules/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { DrawerListComponent } from './drawer-list/drawer-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SHARED_MODULES,
    FooterComponent,
    HeaderComponent,
    MatSidenavModule,
    BottomNavbarComponent,
    DrawerListComponent,
  ],
  template: `<mat-drawer-container [hasBackdrop]="true">
    <mat-drawer #drawer [mode]="'over'">
      <app-drawer-list (onToggleDrawer)="drawer.toggle()" />
    </mat-drawer>
    <mat-drawer-content>
      <app-header (onToggleDrawer)="drawer.toggle()" />
      <main>
        <ng-content />
      </main>
      <app-footer />
      <app-bottom-navbar class="md:hidden" />
    </mat-drawer-content>
  </mat-drawer-container>`,
})
export class LayoutComponent {}
