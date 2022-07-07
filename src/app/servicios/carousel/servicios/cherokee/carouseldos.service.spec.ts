import { TestBed } from '@angular/core/testing';

import { CarouselServicedos } from './carouseldos.service';

describe('Carousel2Service', () => {
  let service: CarouselServicedos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselServicedos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
