import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChallengeService} from 'src/app/_services/challenge.service';
import {Challenge} from 'src/app/_models';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  isLinear = false;
  challenge$: Observable<Challenge>;
  testData;
  contactForm;

  constructor(
    private _formBuilder: FormBuilder,
    public challengeService: ChallengeService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.challenge$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.challengeService.getChallengeById(Number.parseInt(params.get('id'), 10)))
    );
    this.challenge$.subscribe((e) => {
      this.testData = e;
    });

    const hobbiesGroup = {};
    this.testData.excersices.forEach(hobby => {
      hobbiesGroup[hobby.title] = new FormControl('', Validators.required);
    });

    this.contactForm = this._formBuilder.group({
      hobbies: new FormGroup(hobbiesGroup)
    });

console.log(this.testData.excersices[0]);
  }

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
