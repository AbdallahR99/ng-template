import { Component, output } from '@angular/core';
import { APP_ROUTES } from '@app/core/constants/routes';
import { ElementRefDirective } from '@app/core/shared/directives/element-ref.directive';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SHARED_MODULES],
  template: `
    <div [ngStyle]="{ 'padding-top.px': navBar.offsetHeight }"></div>
    <header #navBar class="!md:hidden fixed top-0 left-0 right-0 bg-white z-50">
      <mat-toolbar
        class="flex py-3 gap-5 !bg-primary !bg-opacity-10 !text-primary"
      >
        <span class="md:hidden">
          <button
            (click)="onToggleDrawer.emit()"
            mat-icon-button
            class="drawer-icon md:hidden"
            aria-label="drawer toggle button"
          >
            <mat-icon fontIcon="menu"></mat-icon>
          </button>
        </span>

        <span>NG Template</span>
        @for (item of navItems; track item) {
          <span class="max-md:hidden ">
            <a
              class="!text-primary"
              mat-button
              routerLink="{{ item.link }}"
              routerLinkActive="!bg-primary !bg-opacity-15"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              {{ item.label | translate }}
            </a>
          </span>
        }
        <span class="flex-auto"></span>
        <span class="max-md:hidden ">
          <a
            class="!text-primary"
            mat-button
            routerLink="{{ routes.LOGIN }}"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            {{ 'Login' | translate }}
          </a>
        </span>
        <span class="max-md:hidden ">
          <a
            class="max-md:hidden !text-primary"
            mat-button
            routerLink="{{ routes.REGISTER }}"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            {{ 'Register' | translate }}
          </a>
        </span>
      </mat-toolbar>
    </header>
  `,
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
