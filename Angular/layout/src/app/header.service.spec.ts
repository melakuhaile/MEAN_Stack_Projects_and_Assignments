import { TestBed, inject } from '@angular/core/testing';

import { HeaderComponentService } from './header.service';

describe('HeaderComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderComponentService]
    });
  });

  it('should be created', inject([HeaderComponentService], (service: HeaderComponentService) => {
    expect(service).toBeTruthy();
  }));
});
