import { TestBed } from '@angular/core/testing';

import { InspectionApiService } from '../app/services/inspection-api.service';

describe('InspectionApiService', () => {
  let service: InspectionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
