import { TestBed } from '@angular/core/testing';

import { TeacherroleGuard } from './teacherrole.guard';

describe('TeacherroleGuard', () => {
  let guard: TeacherroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeacherroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
