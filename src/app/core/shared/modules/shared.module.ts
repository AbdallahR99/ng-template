import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MATERIAL_COMMON_MODULE } from './material/material-common.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ElementRefDirective } from '../directives/element-ref.directive';

export const SHARED_MODULES = [
  TranslateModule,
  MATERIAL_COMMON_MODULE,
  CommonModule,
  RouterModule,
  ElementRefDirective,
];
