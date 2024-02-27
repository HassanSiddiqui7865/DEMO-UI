import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsformComponent } from './contact-usform.component';

describe('ContactUsformComponent', () => {
  let component: ContactUsformComponent;
  let fixture: ComponentFixture<ContactUsformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsformComponent]
    });
    fixture = TestBed.createComponent(ContactUsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
