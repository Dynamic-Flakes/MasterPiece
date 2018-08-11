import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {
  verificationForm;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.verificationForm = this.fb.group({
      phone: this.fb.control('', [Validators.required, Validators.maxLength(10)])
    });
  }

  verification() {

  }
}
