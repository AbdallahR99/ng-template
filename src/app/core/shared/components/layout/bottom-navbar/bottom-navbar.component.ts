import { Component } from '@angular/core';
import { APP_ROUTES } from '@app/core/constants/routes';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [SHARED_MODULES],

  template: ` <div [ngStyle]="{ 'padding-top.px': navBar.offsetHeight }"></div>
    <nav
      mat-toolbar
      #navBar
      class="toolbarNav fixed bottom-0 left-0 right-0 flex justify-between px-4 py-2 !bg-white z-50"
    >
      @for (item of navItems; track item) {
        <a
          mat-button
          [routerLink]="item.link"
          routerLinkActive="!bg-primary !bg-opacity-15"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <span>{{ item.label | translate }}</span>
        </a>
      }
    </nav>`,
})
export class BottomNavbarComponent {
  routes = APP_ROUTES;
  navItems: {
    label: string;
    link: string;
  }[] = [
    {
      label: 'Blog',
      link: APP_ROUTES.BLOG,
    },
    {
      label: 'Home',
      link: APP_ROUTES.HOME,
    },
    {
      label: 'Account',
      link: APP_ROUTES.LOGIN,
    },
  ];
}
