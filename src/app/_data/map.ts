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
      name: 'Основы математики',
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
      ...min
    }
  ],
  links: [
    {
      source: 'Математика',
      target: 'Математика 1'
    },
    {
      source: 'Математика 1',
      target: 'Математика 2'
    },
    {
      source: 'Математика 2',
      target: 'Математика 3'
    },
    {
      source: 'Математика 3',
      target: 'Математика 4'
    },
    {
      source: 'Математика 3',
      target: 'Математика 4'
    },
    {
      source: 'Математика 4',
      target: 'Математикв 5'
    },
    {
      source: 'Математика 5',
      target: 'Основы Математики'
    },
    {
      source: 'Основы Математики',
      target: 'Алгебра 1'
    },
    {
      source: 'Алгебра 1',
      target: 'Алгебра 2'
    },
    {
      source: 'Алгебра 2',
      target: 'Алгебра 3'
    },
    {
      source: 'Алгебра 3',
      target: 'Алгебра 4'
    },
    {
      source: 'Алгебра 4',
      target: 'Алгебра 5'
    },
    {
      source: 'Алгебра 5',
      target: 'Основы Алгебры'
    },
    {
      source: 'Основы Математики',
      target: 'Геометрия 1'
    },
    {
      source: 'Геометрия 1',
      target: 'Геометрия 2'
    },
    {
      source: 'Геометрия 2',
      target: 'Геометрия 3'
    },
    {
      source: 'Геометрия 3',
      target: 'Геометрия 4'
    },
    {
      source: 'Геометрия 4',
      target: 'Геометрия 5'
    },
    {
      source: 'Геометрия 5',
      target: 'Основы Геометрии'
    }
  ]
};
