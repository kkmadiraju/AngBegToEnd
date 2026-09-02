export type ArchitectureConceptId =
  | 'dependency-injection'
  | 'modules'
  | 'components'
  | 'templates'
  | 'metadata'
  | 'data-binding'
  | 'directives'
  | 'services';

export interface ArchitectureConcept {
  readonly id: ArchitectureConceptId;
  readonly name: string;
  readonly icon: string;
  readonly color: string;
  readonly summary: string;
  readonly demonstration: string;
  readonly code: string;
  readonly files: readonly string[];
}
