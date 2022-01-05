import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BtnCreatePostComponent} from './btn-create-post.component';

describe('FeedComponent', () => {
  let component: BtnCreatePostComponent;
  let fixture: ComponentFixture<BtnCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnCreatePostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
