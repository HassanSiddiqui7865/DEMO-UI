import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwpackagesComponent } from './cwpackages.component';

describe('CwpackagesComponent', () => {
  let component: CwpackagesComponent;
  let fixture: ComponentFixture<CwpackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CwpackagesComponent]
    });
    fixture = TestBed.createComponent(CwpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
