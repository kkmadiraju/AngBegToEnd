import { TestBed } from '@angular/core/testing';

import { ArchitectureLearning } from './architecture-learning';

describe('ArchitectureLearning', () => {
  let service: ArchitectureLearning;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchitectureLearning);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose all eight architecture concepts', () => {
    expect(service.concepts()).toHaveLength(8);
  });

  it('should track and reset completed concepts', () => {
    service.toggleCompleted('services');

    expect(service.isCompleted('services')).toBe(true);
    expect(service.completedCount()).toBe(1);

    service.reset();
    expect(service.completedCount()).toBe(0);
  });
});
