import { Component, output } from '@angular/core';
import { APP_ROUTES } from '@app/core/constants/routes';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';
import { MatListModule } from '@angular/material/list';
import { injectRouter } from '@analogjs/router';

@Component({
  selector: 'app-drawer-list',
  standalone: true,
  imports: [SHARED_MODULES, MatListModule],
  template: `
    <mat-nav-list>
      @for (item of navItems; track item) {
        <a
          (click)="onToggleDrawer.emit()"
          mat-list-item
          routerLink="{{ item.link }}"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          [activated]="currentRoute == item.link"
        >
          <matListItemTitle routerLink="{{ item.link }}">
            {{ item.label | translate }}</matListItemTitle
          >
        </a>
      }

      <a
        (click)="onToggleDrawer.emit()"
        mat-button
        routerLink="{{ routes.LOGIN }}"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        {{ 'Login' | translate }}
      </a>

      <a
        (click)="onToggleDrawer.emit()"
        mat-button
        routerLink="{{ routes.REGISTER }}"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        {{ 'Register' | translate }}
      </a>
    </mat-nav-list>
  `,
})
export class DrawerListComponent {
  onToggleDrawer = output();
  router = injectRouter();
  get currentRoute(): string {
    return this.router.url;
  }
  routes = APP_ROUTES;
  navItems: {
    label: string;
    link: string;
  }[] = [
    {
      label: 'Home',
      link: APP_ROUTES.HOME,
    },
    {
      label: 'About',
      link: APP_ROUTES.ABOUT,
    },
    {
      label: 'Contact',
      link: APP_ROUTES.CONTACT,
    },
  ];
}
