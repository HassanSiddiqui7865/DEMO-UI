import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionComponent } from './motion.component';

describe('MotionComponent', () => {
  let component: MotionComponent;
  let fixture: ComponentFixture<MotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotionComponent]
    });
    fixture = TestBed.createComponent(MotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
