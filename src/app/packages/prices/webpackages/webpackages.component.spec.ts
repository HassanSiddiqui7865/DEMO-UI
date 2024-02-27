import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpackagesComponent } from './webpackages.component';

describe('WebpackagesComponent', () => {
  let component: WebpackagesComponent;
  let fixture: ComponentFixture<WebpackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebpackagesComponent]
    });
    fixture = TestBed.createComponent(WebpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
