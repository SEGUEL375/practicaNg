import { TestBed } from '@angular/core/testing';

import { CarouselcuatroService } from './carouselcuatro.service';

describe('CarouselcuatroService', () => {
  let service: CarouselcuatroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselcuatroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
