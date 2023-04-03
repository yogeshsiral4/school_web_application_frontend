import { TestBed } from '@angular/core/testing';

import { StudentroleGuard } from './studentrole.guard';

describe('StudentroleGuard', () => {
  let guard: StudentroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
