import { computed, Injectable, signal } from '@angular/core';
import { ArchitectureConcept, ArchitectureConceptId } from '../models/architecture-concept';

@Injectable({
  providedIn: 'root',
})
export class ArchitectureLearning {
  readonly concepts = signal<readonly ArchitectureConcept[]>([
    {
      id: 'dependency-injection',
      name: 'Dependency Injection',
      icon: 'DI',
      color: '#ec407a',
      summary: 'Angular supplies dependencies instead of classes constructing them directly.',
      demonstration: 'This lab injects the learning service and a LAB_TITLE injection token.',
      code: 'private readonly learning = inject(ArchitectureLearning);\nreadonly title = inject(LAB_TITLE);',
      files: ['architecture-lab.ts', 'tokens/lab-title.ts'],
    },
    {
      id: 'modules',
      name: 'Modules',
      icon: 'Ng',
      color: '#f4511e',
      summary: 'NgModules can package related capabilities and expose a public feature API.',
      demonstration: 'DemoShellModule exports this standalone lab to the root application.',
      code: '@NgModule({\n  imports: [ArchitectureLab],\n  exports: [ArchitectureLab]\n})',
      files: ['demo-shell/demo-shell-module.ts', 'app.ts'],
    },
    {
      id: 'components',
      name: 'Components',
      icon: 'C',
      color: '#7e57c2',
      summary: 'Components combine behavior, a view, and styles into reusable UI building blocks.',
      demonstration: 'Every concept is rendered by a reusable ConceptCard child component.',
      code: "@Component({\n  selector: 'app-concept-card',\n  templateUrl: './concept-card.html'\n})",
      files: ['concept-card/concept-card.ts', 'concept-card/concept-card.html'],
    },
    {
      id: 'templates',
      name: 'Templates',
      icon: 'T',
      color: '#3f7cac',
      summary: 'Templates describe the DOM and connect displayed content to component state.',
      demonstration: 'The external template uses @for and @if control-flow blocks.',
      code: '@for (concept of concepts(); track concept.id) {\n  <app-concept-card [concept]="concept" />\n}',
      files: ['architecture-lab/architecture-lab.html'],
    },
    {
      id: 'metadata',
      name: 'Metadata',
      icon: '@',
      color: '#263d5a',
      summary: 'Decorators tell Angular how classes participate in the framework.',
      demonstration: '@Component, @Directive, @Injectable, and @NgModule metadata are all used.',
      code: "@Injectable({ providedIn: 'root' })\nexport class ArchitectureLearning {}",
      files: ['architecture-learning.ts', 'highlight.ts'],
    },
    {
      id: 'data-binding',
      name: 'Data Binding',
      icon: '<>',
      color: '#8e3b76',
      summary: 'Binding keeps component state and the rendered interface synchronized.',
      demonstration: 'Edit your name, select cards, and click the event-binding counter below.',
      code: '{{ learnerName }}\n[concept]="concept"\n(click)="increment()"\n[(ngModel)]="learnerName"',
      files: ['architecture-lab.ts', 'architecture-lab.html'],
    },
    {
      id: 'directives',
      name: 'Directives',
      icon: 'D',
      color: '#6d597a',
      summary: 'Directives add reusable behavior to existing elements and components.',
      demonstration: 'appHighlight applies the selected color and active CSS class to a card.',
      code: '<app-concept-card\n  [appHighlight]="concept.color"\n  [appHighlightActive]="isSelected(concept.id)"\n/>',
      files: ['directives/highlight.ts', 'concept-card/concept-card.css'],
    },
    {
      id: 'services',
      name: 'Services',
      icon: 'S',
      color: '#d81b60',
      summary: 'Services hold shared logic or state independently of presentation components.',
      demonstration: 'ArchitectureLearning owns this concept catalog and completed-item state.',
      code: 'readonly completedCount = computed(() => this.completedIds().size);',
      files: ['services/architecture-learning.ts'],
    },
  ]);

  private readonly completedIds = signal<ReadonlySet<ArchitectureConceptId>>(new Set());

  readonly completedCount = computed(() => this.completedIds().size);
  readonly progressPercent = computed(() =>
    Math.round((this.completedCount() / this.concepts().length) * 100),
  );

  isCompleted(id: ArchitectureConceptId): boolean {
    return this.completedIds().has(id);
  }

  toggleCompleted(id: ArchitectureConceptId): void {
    this.completedIds.update((current) => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  reset(): void {
    this.completedIds.set(new Set());
  }
}
