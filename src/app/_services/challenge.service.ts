import { Injectable } from '@angular/core';
import { Challenge } from '../_models';
import { FAKE_CHALLENGES } from '../_data/challenge';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  challenges: Challenge[] = FAKE_CHALLENGES;

  constructor() {}

  getChallengeById(id: number) {
    const res = this.challenges.filter(item => item.id === id);
    return of(
      res.length > 0 ? res[0] : { id: 0, name: 'Урока не найден', desc: 'О ноууу!!', solved: false, excersices: [] }
    );
  }
}
