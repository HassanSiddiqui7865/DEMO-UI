import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpackagesComponent } from './smpackages.component';

describe('SmpackagesComponent', () => {
  let component: SmpackagesComponent;
  let fixture: ComponentFixture<SmpackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmpackagesComponent]
    });
    fixture = TestBed.createComponent(SmpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
