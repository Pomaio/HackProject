import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChallengeService } from 'src/app/_services/challenge.service';
import { Challenge } from 'src/app/_models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  isLinear = false;
  challenge$: Observable<Challenge>;

  constructor(
    private _formBuilder: FormBuilder,
    public challengeService: ChallengeService,
    private route: ActivatedRoute
  ) {}

  profileForm = new FormGroup({
    math: new FormControl('', [Validators.required]),
    rush: new FormControl('', [Validators.required]),
    physic: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.challenge$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.challengeService.getChallengeById(Number.parseInt(params.get('id'), 10)))
    );
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
