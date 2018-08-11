import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSetPasswordComponent } from './vendor-set-password.component';

describe('VendorSetPasswordComponent', () => {
  let component: VendorSetPasswordComponent;
  let fixture: ComponentFixture<VendorSetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
