import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptCard } from './concept-card';
import { ArchitectureConcept } from '../models/architecture-concept';

describe('ConceptCard', () => {
  let component: ConceptCard;
  let fixture: ComponentFixture<ConceptCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('concept', {
      id: 'components',
      name: 'Components',
      icon: 'C',
      color: '#7e57c2',
      summary: 'Reusable UI building blocks.',
      demonstration: 'A test demonstration.',
      code: '@Component({})',
      files: ['concept-card.ts'],
    } satisfies ArchitectureConcept);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display concept metadata', () => {
    expect(fixture.nativeElement.textContent).toContain('Components');
    expect(fixture.nativeElement.textContent).toContain('Reusable UI building blocks.');
  });
});
