import { Component, output } from '@angular/core';
import { APP_ROUTES } from '@app/core/constants/routes';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SHARED_MODULES],
  template: ` <div [ngStyle]="{ 'padding-top.px': navBar.offsetHeight }"></div>
    <mat-toolbar
      #navBar="ref"
      ref
      class="fixed flex py-3 top-0 left-0 right-0 gap-5 !bg-primary !bg-opacity-10 !text-primary z-50"
    >
      <button
        (click)="onToggleDrawer.emit()"
        mat-icon-button
        class="drawer-icon !md:hidden"
        aria-label="drawer toggle button"
      >
        <mat-icon fontIcon="menu"></mat-icon>
      </button>
      <span>NG Template</span>
      @for (item of navItems; track item) {
        <a
          class="max-md:hidden !text-primary"
          mat-button
          routerLink="{{ item.link }}"
          routerLinkActive="!bg-primary !bg-opacity-15"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          {{ item.label | translate }}
        </a>
      }
      <span class="flex-auto"></span>
      <a
        class="!text-primary"
        mat-button
        routerLink="{{ routes.LOGIN }}"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        {{ 'Login' | translate }}
      </a>

      <a
        class="max-md:hidden !text-primary"
        mat-button
        routerLink="{{ routes.REGISTER }}"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        {{ 'Register' | translate }}
      </a>
    </mat-toolbar>`,
})
export class HeaderComponent {
  onToggleDrawer = output();
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
