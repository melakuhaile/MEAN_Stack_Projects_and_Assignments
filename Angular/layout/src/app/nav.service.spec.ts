import { TestBed, inject } from '@angular/core/testing';

import { NavComponentService } from './nav.service';

describe('NavComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavComponentService]
    });
  });

  it('should be created', inject([NavComponentService], (service: NavComponentService) => {
    expect(service).toBeTruthy();
  }));
});
