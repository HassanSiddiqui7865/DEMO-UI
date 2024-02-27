import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkImageComponent } from './work-image.component';

describe('WorkImageComponent', () => {
  let component: WorkImageComponent;
  let fixture: ComponentFixture<WorkImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkImageComponent]
    });
    fixture = TestBed.createComponent(WorkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
