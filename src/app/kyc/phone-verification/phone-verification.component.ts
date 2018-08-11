import { Vendor } from './../../models/user';
import { VendorService } from './../../services/vendor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {
  verificationForm;
  usertype;
  usermode;
  bname;
  email;

  constructor(public fb: FormBuilder, public _vendorService: VendorService) { }

  ngOnInit() {
    this.createForm();
    this._vendorService._usertype.subscribe(data => this.usertype = data);
    this._vendorService._usermode.subscribe(data => this.usermode = data);
    this._vendorService._bname.subscribe(data => this.bname = data);
    this._vendorService._email.subscribe(data => this.email = data);
  }

   // Require user model
   vendorModel = new Vendor();

  verification() {
    const _phone = this.verificationForm.controls['phone'].value;
    
    this.vendorModel = {
      id: this.email,
      mode: this.usermode,
      cooperativeId: '',
      name: this.bname,
      usertype: this.usertype,
      phoneNo: _phone
    }
        const res = this._vendorService
          .registerVendor(this.vendorModel)
          .subscribe(res => {
            console.log(res);
            console.log('Registered!!!');
            // this.openDialog();
            (err) => {
              console.log(err);
            };
          });
  }

  createForm() {
    this.verificationForm = this.fb.group({
      phone: this.fb.control('', [Validators.required, Validators.maxLength(10)])
    });
  }
}
