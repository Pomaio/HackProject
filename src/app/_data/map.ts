import { links } from './map_links';

const  font = 20;

const max = {r: 250, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg', challengeId: 1};
const medium = {r: 175, fontSize: font, iamgeUrl: 'assets/planets/mercury.svg', challengeId: 1};
const min = {r: 125, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg', challengeId: 1};

export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Старт',
      result: null,
      r: 175,
      fontSize: 20,
      iamgeUrl: 'assets/planets/jupitier.svg',
      challengeId: 1
    },
    {
      name: 'Математика',
      ...max,
      challengeId: 2
    },
    {
      name: 'Математика 1',
     ...min,
      challengeId: 3
    },
    {
      name: 'Математика 2',
      ...min
    },
    {
      name: 'Математика 3',
     ...min
    },
    {
      name: 'Математика 4',
      ...min
    },
    {
      name: 'Математика 5',
      ...min
    },
    {
      name: 'Основы Математики',
      ...medium
    },
    {
      name: 'Алгебра 1',
      ...min
    },
    {
      name: 'Алгебра 2',
     ...min
    },
    {
      name: 'Алгебра 3',
      ...min
    },
    {
      name: 'Алгебра 4',
      ...min
    },
    {
      name: 'Алгебра 5',
      ...min
    },
    {
      name: 'Основы Алгебры',
      ...medium
    },
    {
      name: 'Геометрия 1',
      ...min
    },
    {
      name: 'Геометрия 2',
      ...min
    },
    {
      name: 'Геометрия 3',
      ...min
    },
    {
      name: 'Геометрия 4',
      ...min
    },
    {
      name: 'Геометрия 5',
      ...min
    },
    {
      name: 'Основы Геометрии',
      ...medium
    },
    {
      name: 'Физика',
      ...max
    },
    {
      name: 'Физика 1',
      ...min
    },
    {
      name: 'Физика 2',
      ...min
    },
    {
      name: 'Физика 3',
      ...min
    },
    {
      name: 'Физика 4',
      ...min
    },
    {
      name: 'Физика 5',
      ...min
    },
    {
      name: 'Основы Физики',
      ...medium
    },
    {
      name: 'Динамика 1',
      ...min
    },
    {
      name: 'Динамика 2',
      ...min
    },
    {
      name: 'Динамика 3',
      ...min
    },
    {
      name: 'Динамика 4',
      ...min
    },
    {
      name: 'Динамика 5',
      ...min
    },
    {
      name: 'Основы Динамики',
      ...medium
    },
    {
      name: 'Термодинамика 1',
      ...min
    },
    {
      name: 'Термодинамика 2',
      ...min
    },
    {
      name: 'Термодинамика 3',
      ...min
    },
    {
      name: 'Термодинамика 4',
      ...min
    },
    {
      name: 'Термодинамика 5',
      ...min
    },
    {
      name: 'Основы Термодинамики',
      ...medium
    },
    {
      name: 'Электромагнитизм 1',
      ...min
    },
    {
      name: 'Электромагнитизм 2',
      ...min
    },
    {
      name: 'Электромагнитизм 3',
      ...min
    },
    {
      name: 'Электромагнитизм 4',
      ...min
    },
    {
      name: 'Электромагнитизм 5',
      ...min
    },
    {
      name: 'Основы Электромагнитизма',
      ...medium
    },
    {
      name: 'Оптика 1',
      ...min
    },
    {
      name: 'Оптика 2',
      ...min
    },
    {
      name: 'Оптика 3',
      ...min
    },
    {
      name: 'Оптика 4',
      ...min
    },
    {
      name: 'Оптика 5',
      ...min
    },
    {
      name: 'Основы Оптики',
      ...medium
    },
    {
      name: 'Химия',
      ...max
    },
    {
      name: 'Химия 1',
      ...min
    },
    {
      name: 'Химия 2',
      ...min
    },
    {
      name: 'Химия 3',
      ...min
    },
    {
      name: 'Химия 4',
      ...min
    },
    {
      name: 'Химия 5',
      ...min
    },
    {
      name: 'Основы Химии',
      ...medium
    },
    {
      name: 'Ядерная Физика',
      ...medium
    },
    {
      name: 'Информатика',
      ...max
    },
    {
      name: 'Информатика 1',
      ...min
    },
    {
      name: 'Информатика 2',
      ...min
    },
    {
      name: 'Информатика 3',
      ...min
    },
    {
      name: 'Информатика 4',
      ...min
    },
    {
      name: 'Информатика 5',
      ...min
    },
    {
      name: 'Основы Информатики',
      ...medium
    },
    {
      name: 'Устройства 1',
      ...min
    },
    {
      name: 'Устройства 2',
      ...min
    },
    {
      name: 'Устройства 3',
      ...min
    },
    {
      name: 'Основы Устройств',
      ...medium
    },
    {
      name: 'Физические Установки',
      ...medium
    },
    {
      name: 'Физические Установки 1',
      ...min
    },
    {
      name: 'Физические Установки 2',
      ...min
    },
    {
      name: 'Физические Установки 3',
      ...min
    },
    {
      name: 'Алгоритмы 1',
      ...min
    },
    {
      name: 'Алгоритмы 2',
      ...min
    },
    {
      name: 'Алгоритмы 3',
      ...min
    },
    {
      name: 'Основы Алгоритмов',
      ...medium
    },
    {
      name: 'Матанализ 1',
      ...min
    },
    {
      name: 'Матанализ 2',
      ...min
    },
    {
      name: 'Матанализ 3',
      ...min
    },
    {
      name: 'Основы Матанализа',
      ...medium
    },
    {
      name: 'Неорганическая химия 1',
      ...min
    },
    {
      name: 'Неорганическая химия 2',
      ...min
    },
    {
      name: 'Неорганическая химия 3',
      ...min
    },
    {
      name: 'Неорганическая химия 4',
      ...min
    },
    {
      name: 'Неорганическая химия 5',
      ...min
    },
    {
      name: 'Секреты неорганической химии',
      ...medium
    },
    {
      name: 'Органическая химия 1',
      ...min
    },
    {
      name: 'Органическая химия 2',
      ...min
    },
    {
      name: 'Органическая химия 3',
      ...min
    },
    {
      name: 'Органическая химия 4',
      ...min
    },
    {
      name: 'Органическая химия 5',
      ...min
    },
    {
      name: 'Секреты органической химии',
      ...medium
    },
  ],
  links
};
