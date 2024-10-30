import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideClientHydration,
  withI18nSupport,
} from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideClientTranslatorModule } from '@core/shared/modules/translator/translator.module';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  withComponentInputBinding,
  withNavigationErrorHandler,
} from '@angular/router';

// export function tokenGetter() {
//   // if (!localStorage) return null;
//   // return localStorage.getItem(LocalStorageKeys.TOKEN);
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor]),
    ),
    provideFileRouter(
      withComponentInputBinding(),
      withNavigationErrorHandler(console.error),
    ),
    provideClientTranslatorModule(),
    provideAnimations(),
    provideClientHydration(withI18nSupport()),
    provideContent(withMarkdownRenderer()),
  ],
};
