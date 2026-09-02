import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Highlight } from './highlight';

@Component({
  imports: [Highlight],
  template: `<div appHighlight [appHighlightActive]="true">Highlighted</div>`,
})
class HighlightTestHost {}

describe('Highlight', () => {
  it('should apply its active host class', async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightTestHost],
    }).compileComponents();

    const fixture = TestBed.createComponent(HighlightTestHost);
    fixture.detectChanges();

    const highlighted = fixture.nativeElement.querySelector('div') as HTMLDivElement;
    expect(highlighted.classList.contains('is-highlighted')).toBe(true);
  });
});
