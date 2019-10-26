import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  isLinear = false;


  constructor(private _formBuilder: FormBuilder) {
  }

  profileForm = new FormGroup({
    math: new FormControl('', [
      Validators.required,
    ]),
    rush: new FormControl('', [
      Validators.required,
    ]),
    physic: new FormControl('', [
      Validators.required,
    ]),
  });

  ngOnInit() {}


  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
