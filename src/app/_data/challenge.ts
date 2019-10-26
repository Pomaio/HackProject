import {Challenge} from '../_models/education';

export const FAKE_CHALLENGES: Challenge[] = [
  {
    id: 1,
    name: 'Алгебра: Тест 1',
    desc: 'Тренирвка сложения дробей',
    excersices: [
      {
        title: `Математика`,
        question: 'Вы любите математику?',
        answers: ['Да', 'Нет'],
        rightAnswer: ['Да']
      },

      {
        title: `Физика`,
        question: 'Вы любите физику?',
        answers: ['Да', 'Нет'],
        rightAnswer: ['Да']
      },

      {
        title: `Литература`,
        question: 'Вы любите литературу?',
        answers: ['Да', 'Нет'],
        rightAnswer: ['Да']
      },
    ],
    solved: false
  }
];
