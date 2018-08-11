import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOtpComponent } from './vendor-otp.component';

describe('VendorOtpComponent', () => {
  let component: VendorOtpComponent;
  let fixture: ComponentFixture<VendorOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
