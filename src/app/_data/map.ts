import { links } from './map_links';

const  font = 20;

const max = {r: 100, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg'};
const medium = {r: 70, fontSize: font, iamgeUrl: 'assets/planets/mercury.svg'};
const min = {r: 40, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg'};

export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Математика',
      ...max
    },
    {
      name: 'Математика 1',
     ...min
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
  ],
  links
};
