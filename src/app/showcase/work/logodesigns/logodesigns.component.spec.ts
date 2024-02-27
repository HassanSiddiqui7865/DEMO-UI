import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodesignsComponent } from './logodesigns.component';

describe('LogodesignsComponent', () => {
  let component: LogodesignsComponent;
  let fixture: ComponentFixture<LogodesignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogodesignsComponent]
    });
    fixture = TestBed.createComponent(LogodesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
