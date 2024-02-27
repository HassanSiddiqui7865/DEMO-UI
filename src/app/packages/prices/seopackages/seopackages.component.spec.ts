import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeopackagesComponent } from './seopackages.component';

describe('SeopackagesComponent', () => {
  let component: SeopackagesComponent;
  let fixture: ComponentFixture<SeopackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeopackagesComponent]
    });
    fixture = TestBed.createComponent(SeopackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
