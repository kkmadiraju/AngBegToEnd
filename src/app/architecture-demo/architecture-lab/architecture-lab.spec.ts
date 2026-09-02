import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureLab } from './architecture-lab';

describe('ArchitectureLab', () => {
  let component: ArchitectureLab;
  let fixture: ComponentFixture<ArchitectureLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureLab],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all architecture concepts', () => {
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('app-concept-card');

    expect(cards).toHaveLength(8);
    expect(fixture.nativeElement.textContent).toContain('Dependency Injection');
    expect(fixture.nativeElement.textContent).toContain('Services');
  });

  it('should update the event-binding counter', () => {
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.counter-button') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(button.textContent).toContain('1');
  });
});
