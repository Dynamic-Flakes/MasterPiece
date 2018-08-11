import { VendorBankComponent } from './vendor-bank/vendor-bank.component';
import { PhoneVerificationComponent } from './phone-verification/phone-verification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule, MatDialogModule } from '@angular/material';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorOtpComponent } from './vendor-otp/vendor-otp.component';
import { VendorSetPasswordComponent } from './vendor-set-password/vendor-set-password.component';

const appRoutes: Routes = [
  { path: 'vendor-phone', component: PhoneVerificationComponent },
  { path: 'vendor-bank', component: VendorBankComponent },
  { path: 'vendor-login', component: VendorLoginComponent },
  { path: 'vendor-otp', component: VendorOtpComponent },
  { path: 'vendor-password', component: VendorSetPasswordComponent },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    PhoneVerificationComponent,
    VendorBankComponent,
    VendorLoginComponent,
    VendorOtpComponent,
    VendorSetPasswordComponent
  ],
  entryComponents: [],
  exports: [
    PhoneVerificationComponent,
    VendorBankComponent,
    VendorLoginComponent,
    VendorOtpComponent,
    VendorSetPasswordComponent
  ],
  providers: []
})
export class VendorKycModule { }
