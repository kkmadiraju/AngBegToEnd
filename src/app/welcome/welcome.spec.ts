import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Welcome } from './welcome';

describe('Welcome', () => {
  let fixture: ComponentFixture<Welcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome],
    }).compileComponents();

    fixture = TestBed.createComponent(Welcome);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display its welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Welcome works!');
  });
});
