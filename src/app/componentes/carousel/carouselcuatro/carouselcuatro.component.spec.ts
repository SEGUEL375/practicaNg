import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselcuatroComponent } from './carouselcuatro.component';

describe('CarouselcuatroComponent', () => {
  let component: CarouselcuatroComponent;
  let fixture: ComponentFixture<CarouselcuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselcuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselcuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
