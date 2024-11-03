import { Component } from '@angular/core';
import { APP_ROUTES } from '@app/core/constants/routes';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [SHARED_MODULES],
  styles: `
    // .toolbarNav {
    //   position: fixed;
    //   bottom: 0;
    //   z-index: 1000;
    //   display: flex;
    //   justify-content: space-around;
    //   padding: 2em;
    //   background-color: white;

    //   -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    //   -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
    //   box-shadow: 2px 2px 4px 5px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */

    //   button {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     width: 100%;
    //     span {
    //       display: block;
    //     }
    //   }
    // }

    // button:hover,
    // .active-link {
    //   color: blueviolet;
    // }
  `,
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
      label: 'Blogs',
      link: APP_ROUTES.BLOGS,
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
