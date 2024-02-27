import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopackagesComponent } from './logopackages.component';

describe('LogopackagesComponent', () => {
  let component: LogopackagesComponent;
  let fixture: ComponentFixture<LogopackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogopackagesComponent]
    });
    fixture = TestBed.createComponent(LogopackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
