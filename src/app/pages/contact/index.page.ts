import { Component, signal } from '@angular/core';
import { SHARED_MODULES } from '@app/core/shared/modules/shared.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SHARED_MODULES],
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <h2>Analog Contact</h2>
    <h5>{{ 'Hello' | translate }}</h5>

    <h3>The fullstack meta-framework for Angular!</h3>

    <div class="card">
      <button type="button" class="btn btn-primary" (click)="increment()">
        Count {{ count() }}
      </button>
    </div>

    <p class="read-the-docs">
      <a href="https://analogjs.org" target="_blank">Docs</a> |
      <a href="https://github.com/analogjs/analog" target="_blank">GitHub</a> |
      <a href="https://github.com/sponsors/brandonroberts" target="_blank">
        Sponsor
      </a>
    </p>
  `,
  styles: `
    .logo {
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .read-the-docs > * {
      color: #fff;
    }

    @media (prefers-color-scheme: light) {
      .read-the-docs > * {
        color: #213547;
      }
    }
  `,
})
export default class ContactComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
