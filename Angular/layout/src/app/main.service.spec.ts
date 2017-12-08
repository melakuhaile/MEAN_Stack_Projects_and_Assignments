import { TestBed, inject } from '@angular/core/testing';

import { MainComponentService } from './main.service';

describe('MainComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainComponentService]
    });
  });

  it('should be created', inject([MainComponentService], (service: MainComponentService) => {
    expect(service).toBeTruthy();
  }));
});
