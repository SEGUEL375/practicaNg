import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeprenegadeComponent } from './jeeprenegade.component';

describe('JeeprenegadeComponent', () => {
  let component: JeeprenegadeComponent;
  let fixture: ComponentFixture<JeeprenegadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeeprenegadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeeprenegadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
