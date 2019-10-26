import { links } from './map_links';

const font = 20;

const max = { r: 100, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg' };
const medium = { r: 70, fontSize: font, iamgeUrl: 'assets/planets/mercury.svg' };
const min = { r: 40, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg' };

export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Математика',
      challengeId: 1,
      ...max
    },
    {
      name: 'Математика 1',
      challengeId: 1,
      ...min
    },
    {
      name: 'Математика 2',
      challengeId: 1,
      ...min
    },
    {
      name: 'Математика 3',
      challengeId: 1,
      ...min
    },
    {
      name: 'Математика 4',
      challengeId: 1,
      ...min
    },
    {
      name: 'Математика 5',
      challengeId: 1,
      ...min
    },
    {
      name: 'Основы Математики',
      challengeId: 1,
      ...medium
    },
    {
      name: 'Алгебра 1',
      challengeId: 1,
      ...min
    },
    {
      name: 'Алгебра 2',
      challengeId: 1,
      ...min
    },
    {
      name: 'Алгебра 3',
      challengeId: 1,
      ...min
    },
    {
      name: 'Алгебра 4',
      challengeId: 1,
      ...min
    },
    {
      name: 'Алгебра 5',
      challengeId: 1,
      ...min
    },
    {
      name: 'Основы Алгебры',
      challengeId: 1,
      ...medium
    },
    {
      name: 'Геометрия 1',
      challengeId: 1,
      ...min
    },
    {
      name: 'Геометрия 2',
      challengeId: 1,
      ...min
    },
    {
      name: 'Геометрия 3',
      challengeId: 1,
      ...min
    },
    {
      name: 'Геометрия 4',
      challengeId: 1,
      ...min
    },
    {
      name: 'Геометрия 5',
      challengeId: 1,
      ...min
    },
    {
      name: 'Основы Геометрии',
      challengeId: 1,
      ...medium
    },
    {
      name: 'Физика',
      challengeId: 1,
      ...max
    },
    {
      name: 'Физика 1',
      challengeId: 2,
      ...min
    },
    {
      name: 'Физика 2',
      challengeId: 1,
      ...min
    },
    {
      name: 'Физика 3',
      challengeId: 1,
      ...min
    },
    {
      name: 'Физика 4',
      challengeId: 1,
      ...min
    },
    {
      name: 'Физика 5',
      challengeId: 1,
      ...min
    },
    {
      name: 'Основы Физики',
      challengeId: 1,
      ...medium
    }
  ],
  links
};
