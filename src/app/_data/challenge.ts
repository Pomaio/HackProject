import { Challenge } from '../_models/education';

export const FAKE_CHALLENGES: Challenge[] = [
  {
    id: 1,
    name: 'Алгебра: Тест 1',
    desc: 'Тренирвка сложения дробей',
    excersices: [
      {
        question: 'Are you ready?',
        answers: ['Yes', 'No'],
        rightAnswer: ['Yes']
      }
    ],
    solved: false
  }
];
