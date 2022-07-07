import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeprubiconComponent } from './jeeprubicon.component';

describe('JeeprubiconComponent', () => {
  let component: JeeprubiconComponent;
  let fixture: ComponentFixture<JeeprubiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeeprubiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeeprubiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
