import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeepcherokeelimitedComponent } from './jeepcherokeelimited.component';

describe('JeepcherokeelimitedComponent', () => {
  let component: JeepcherokeelimitedComponent;
  let fixture: ComponentFixture<JeepcherokeelimitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeepcherokeelimitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeepcherokeelimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
