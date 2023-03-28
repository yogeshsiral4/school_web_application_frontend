import { TestBed } from '@angular/core/testing';

import { DropmessageService } from './dropmessage.service';

describe('DropmessageService', () => {
  let service: DropmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
