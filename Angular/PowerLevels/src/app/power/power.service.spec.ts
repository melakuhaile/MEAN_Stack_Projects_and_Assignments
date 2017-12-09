import { TestBed, inject } from '@angular/core/testing';

import { PowerService } from './power.service';

describe('PowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerService]
    });
  });

  it('should be created', inject([PowerService], (service: PowerService) => {
    expect(service).toBeTruthy();
  }));
});
