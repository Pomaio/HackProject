import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChallengeService } from 'src/app/_services/challenge.service';
import { Challenge } from 'src/app/_models';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TelegramBotService } from 'src/app/_services/telegram-bot.service';
import { MAP_DEFAULT } from '../../_data/map';
import { TreeProgressService } from 'src/app/_services/tree-progress.service';

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
    public router: Router,
    private _formBuilder: FormBuilder,
    public challengeService: ChallengeService,
    private route: ActivatedRoute,
    private telegramBot: TelegramBotService,
    private treeProgress: TreeProgressService
  ) {}

  ngOnInit() {
    this.challenge$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.challengeService.getChallengeById(Number.parseInt(params.get('id'), 10)))
    );
    this.challenge$.subscribe(e => {
      this.telegramBot.userStartChallenge(e);
      this.testData = e;
    });

    const hobbiesGroup = {};
    this.testData.excersices.forEach(hobby => {
      hobbiesGroup[hobby.title] = new FormControl('', Validators.required);
    });

    this.contactForm = this._formBuilder.group({
      hobbies: new FormGroup(hobbiesGroup)
    });
  }

  onSubmit() {
    console.log(this.testData, MAP_DEFAULT.nodes[this.testData.id]);

    // @ts-ignore
    (MAP_DEFAULT.nodes.reduce((res, el) => {
      if (el.challengeId === this.testData.id) {
        this.treeProgress.saveCurrentProgress(this.testData.id);
        return el;
      }
      return res;

    }, {})as any).result = this.testData.excersices.reduce((sum, el) => {

      if (el.rightAnswer === this.contactForm.value.hobbies[el.title]) {
        return (sum += 10);
      }
      return sum;
    }, 0);
    this.router.navigate(['../../map']);
  }
}
