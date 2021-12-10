import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMyTripPopUpComponent } from './plan-my-trip-pop-up.component';

describe('PlanMyTripPopUpComponent', () => {
  let component: PlanMyTripPopUpComponent;
  let fixture: ComponentFixture<PlanMyTripPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMyTripPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMyTripPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
