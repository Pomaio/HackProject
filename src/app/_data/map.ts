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
      source: 'Старт',
      target: 'Математика'
    },
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
      target: 'Алгебра'
    },
    {
      source: 'Математика 3',
      target: 'Геометрия'
    },
    {
      source: 'Геометрия',
      target: 'Геометрия 1'
    },
    {
      source: 'Геометрия 1',
      target: 'Геометрия 2'
    },
    {
      source: 'Алгебра',
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
      source: 'Алгебра 2',
      target: 'Физика'
    },
    {
      source: 'Алгебра 2',
      target: 'Химия'
    },
    {
      source: 'Алгебра 4',
      target: 'Экономика'
    },
    {
      source: 'Начало',
      target: 'Чистописание'
    },
    {
      source: 'Чистописание',
      target: 'Чистописание 1'
    },
    {
      source: 'Чистописание 1',
      target: 'Чистописание 2'
    },
    {
      source: 'Начало',
      target: 'Чтение'
    },
    {
      source: 'Чтение',
      target: 'Чтение 1'
    },
    {
      source: 'Чтение 1',
      target: 'Чтение 2'
    },
    {
      source: 'Чтение 2',
      target: 'Литература'
    },
    {
      source: 'Литература',
      target: 'Литература 1'
    },
    {
      source: 'Литература 1',
      target: 'Литература 2'
    },
    {
      source: 'Чтение 2',
      target: 'Русский язык'
    },
    {
      source: 'Чистописание 2',
      target: 'Русский язык'
    },
    {
      source: 'Русский язык',
      target: 'Русский язык 1'
    },
    {
      source: 'Русский язык 1',
      target: 'Русский язык 2'
    },
    {
      source: 'Русский язык 2',
      target: 'Философия'
    },
    {
      source: 'Экономика',
      target: 'Философия'
    }
  ]
};
