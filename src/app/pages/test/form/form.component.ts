import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface CompanyProfile {
  current_time: string; // В формате ISO
  type: string[]; // Возможно заменится enum
  name: string;
  tax_number: number;
  ogrn: string;
  passport: string;
  address: string;
  site: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor() {}

  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    ID: new FormControl('', [Validators.required, Validators.minLength(3)]),
    state: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    reference: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  countries: string[] = ['Russia', 'USA', 'USSA'];
  city: string[] = ['Moscow', 'Kazan', 'New York'];
  state: string[] = ['Texas', 'Alaska'];

  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.profileForm.get('email').hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getErrorMessage(elem) {
    return this.profileForm.get(elem).hasError('required')
      ? 'You must enter a value'
      : this.profileForm.get(elem).hasError('minlength')
      ? ' Name must be at least 3 characters long.\n'
      : '';
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {}
}
