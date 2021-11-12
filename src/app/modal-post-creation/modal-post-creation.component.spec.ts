import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostCreationComponent } from './modal-post-creation.component';

describe('PostCreationComponent', () => {
  let component: ModalPostCreationComponent;
  let fixture: ComponentFixture<ModalPostCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPostCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPostCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
