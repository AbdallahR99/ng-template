import { Component, output } from '@angular/core';
import { APP_ROUTES } from '@app/core/constants/routes';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';
import { MatListModule } from '@angular/material/list';
import { injectRouter } from '@analogjs/router';

@Component({
  selector: 'app-drawer-list',
  standalone: true,
  imports: [SHARED_MODULES, MatListModule],
  styles: [
    `
      @use 'colors' as c;
      :host {
        --mat-list-active-indicator-color: #{c.tint(c.$primary, 90%)};
      }
    `,
  ],
  template: `
    <mat-nav-list class="h-screen !flex flex-col">
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
      <span class="flex-auto"></span>
      <a
        (click)="onToggleDrawer.emit()"
        mat-list-item
        [routerLink]="routes.LOGIN"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        [activated]="currentRoute == routes.LOGIN"
      >
        <matListItemTitle [routerLink]="routes.LOGIN">
          {{ 'Login' | translate }}
        </matListItemTitle>
      </a>
      <a
        (click)="onToggleDrawer.emit()"
        mat-list-item
        [routerLink]="routes.REGISTER"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        [activated]="currentRoute == routes.REGISTER"
      >
        <matListItemTitle [routerLink]="routes.REGISTER">
          {{ 'Register' | translate }}
        </matListItemTitle>
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
      label: 'Blog',
      link: APP_ROUTES.BLOG,
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
