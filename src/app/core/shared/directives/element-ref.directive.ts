import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[ref]',
  standalone: true,
  exportAs: 'ref',
})
export class ElementRefDirective {
  ref = inject(ElementRef<HTMLElement>);
}
