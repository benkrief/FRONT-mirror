import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPlanMyTripComponent } from './btn-plan-my-trip.component';

describe('ButtonPlanMyTripComponent', () => {
  let component: BtnPlanMyTripComponent;
  let fixture: ComponentFixture<BtnPlanMyTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPlanMyTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPlanMyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
