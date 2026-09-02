import { Component, input, output } from '@angular/core';
import { ArchitectureConcept } from '../models/architecture-concept';

@Component({
  selector: 'app-concept-card',
  imports: [],
  templateUrl: './concept-card.html',
  styleUrl: './concept-card.css',
})
export class ConceptCard {
  readonly concept = input.required<ArchitectureConcept>();
  readonly active = input(false);
  readonly completed = input(false);

  readonly selected = output<ArchitectureConcept['id']>();
  readonly completionToggled = output<ArchitectureConcept['id']>();
}
