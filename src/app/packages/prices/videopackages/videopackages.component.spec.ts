import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopackagesComponent } from './videopackages.component';

describe('VideopackagesComponent', () => {
  let component: VideopackagesComponent;
  let fixture: ComponentFixture<VideopackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideopackagesComponent]
    });
    fixture = TestBed.createComponent(VideopackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
