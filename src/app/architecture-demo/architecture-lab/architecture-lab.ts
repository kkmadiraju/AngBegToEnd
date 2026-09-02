import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Welcome } from '../../welcome/welcome';
import { ConceptCard } from '../concept-card/concept-card';
import { Highlight } from '../directives/highlight';
import { ArchitectureConceptId } from '../models/architecture-concept';
import { ArchitectureLearning } from '../services/architecture-learning';
import { LAB_TITLE } from '../tokens/lab-title';

@Component({
  selector: 'app-architecture-lab',
  imports: [FormsModule, Welcome, ConceptCard, Highlight],
  templateUrl: './architecture-lab.html',
  styleUrl: './architecture-lab.css',
})
export class ArchitectureLab {
  private readonly learning = inject(ArchitectureLearning);

  protected readonly title = inject(LAB_TITLE);
  protected readonly concepts = this.learning.concepts;
  protected readonly completedCount = this.learning.completedCount;
  protected readonly progressPercent = this.learning.progressPercent;
  protected readonly selectedId = signal<ArchitectureConceptId>('dependency-injection');
  protected readonly clickCount = signal(0);
  protected learnerName = 'Kiran';

  protected readonly selectedConcept = computed(() =>
    this.concepts().find((concept) => concept.id === this.selectedId()),
  );

  protected selectConcept(id: ArchitectureConceptId): void {
    this.selectedId.set(id);
  }

  protected isSelected(id: ArchitectureConceptId): boolean {
    return this.selectedId() === id;
  }

  protected isCompleted(id: ArchitectureConceptId): boolean {
    return this.learning.isCompleted(id);
  }

  protected toggleCompleted(id: ArchitectureConceptId): void {
    this.learning.toggleCompleted(id);
  }

  protected increment(): void {
    this.clickCount.update((count) => count + 1);
  }

  protected reset(): void {
    this.learning.reset();
    this.clickCount.set(0);
    this.learnerName = 'Kiran';
  }
}
