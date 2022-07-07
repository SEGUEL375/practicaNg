import { TestBed } from '@angular/core/testing';

import { CarouseltresService } from './carouseltres.service';

describe('CarouseltresService', () => {
  let service: CarouseltresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouseltresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
