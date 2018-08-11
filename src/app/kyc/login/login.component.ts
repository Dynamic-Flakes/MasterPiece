import { VendorService } from './../../services/vendor.service';
import { UserType } from './../../models/user';
import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  // cooperId: String;
  // password: String;
  tempPassword;

  constructor(public fb: FormBuilder, public _authService: AuthService, public router: Router, public data: DataService, public _vendorService: VendorService) { }

  ngOnInit() {
    this.createForm();
  }

  // Require user types
  userTypes = new UserType().types;

  login() {
    const userModel = {
      cooperId: this.loginForm.controls['cooperId'].value,
      password: this.loginForm.controls['password'].value
    };

    // Getting the Temporary Password for persistence purpose
    this.tempPassword = this.loginForm.controls['password'].value;

    console.log(userModel);
    this._authService.authenticateUser(userModel).subscribe(res => {
      console.log(res.data.token.token);
      console.log(res);
      if (res.success == true) {

        console.log(res.UserType);

        // IF USER IS A COOPERATOR
        if (res.UserType == this.userTypes[0].name) {
          this._authService.storeUserData(res.data.token.token, res.data.user);
            // Sending Mongo Id and Temporary Password to Data Store
            const _id = res.data.user._id;
            const _pass = this.data.changeUserId(_id);
            this.data.changeUserPassword(this.tempPassword);
          
            // CHECK WHERE USER STOPPED IN THE REGISTERATION PROCESS AND CONTINUE
            console.log(`This is the current userMode:- ${res.data.user.userMode}`);
            const _userMode = res.data.user.userMode;
            if (_userMode === 'New') {
              // Navigating to Reset Password Page
            this.router.navigate(['/kyc/change-password']);
            } if (_userMode === 'OTPverify') {
              // Navigating to First Otp Page
            this.router.navigate(['/kyc/otp']);
            } if (_userMode === 'TransPin') {
              // Navigating to Set Transaction Pin Page
            this.router.navigate(['/kyc/transaction-pin']);
            } if (_userMode === 'Confirm') {
              // Navigating to Cooperator Dashboard
            this.router.navigate(['/shop/history/transactions']);
            }
        }

        // IF USER IS A VENDOR
        if (res.UserType == this.userTypes[1].name) {
            this._authService.storeUserData(res.data.token.token, res.data.user);
            // Sending Mongo Id and Temporary Password to Data Store
            const _id = res.data.user._id;
            const _pass = this.data.changeUserId(_id);
            this.data.changeUserPassword(this.tempPassword);

            // Navigating Reset to Password Page
            this.router.navigate(['/kyc/otp']);
        }
      } else {
      }
    }, (err) => {
      console.log(err);
      this.router.navigate(['/kyc/login']);
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      cooperId: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(3)])
    });
  }

}
