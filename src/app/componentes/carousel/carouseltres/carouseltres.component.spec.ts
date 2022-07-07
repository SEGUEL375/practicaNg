import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseltresComponent } from './carouseltres.component';

describe('CarouseltresComponent', () => {
  let component: CarouseltresComponent;
  let fixture: ComponentFixture<CarouseltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouseltresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
