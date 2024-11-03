import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@core/shared/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  template: ` <app-layout>
    <router-outlet />
  </app-layout>`,
})
export class AppComponent {}
