import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IndustryRocService } from './industry-roc.service';

describe('IndustryRocService', () => {
  let service: IndustryRocService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IndustryRocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
