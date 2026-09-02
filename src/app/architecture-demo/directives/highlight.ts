import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[class.is-highlighted]': 'appHighlightActive()',
    '[style.--highlight-color]': 'appHighlight()',
  },
})
export class Highlight {
  readonly appHighlight = input('#7c3aed');
  readonly appHighlightActive = input(false);
}
