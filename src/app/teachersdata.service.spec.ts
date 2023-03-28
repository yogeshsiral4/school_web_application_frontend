import { TestBed } from '@angular/core/testing';

import { TeachersdataService } from './teachersdata.service';

describe('TeachersdataService', () => {
  let service: TeachersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
