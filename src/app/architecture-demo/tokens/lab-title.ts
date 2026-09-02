import { InjectionToken } from '@angular/core';

export const LAB_TITLE = new InjectionToken<string>('LAB_TITLE', {
  providedIn: 'root',
  factory: () => 'Angular Architecture Lab',
});
