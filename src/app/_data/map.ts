export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Старт',
      r: 55,
      fontSize: 20,
      color: 'green'
    },
    {
      name: 'Математика',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Математика 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Математика 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Математика 3',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Алгебра',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Алгебра 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Алгебра 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Алгебра 3',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Алгебра 4',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Геометрия',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Геометрия 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Геометрия 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Физика',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Химия',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Экономика',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Чистописание',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Чистописание 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Чистописание 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Чтение',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Философия',
      r: 66,
      fontSize: 30,
      color: 'yellow'
    },
    {
      name: 'Чтение 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Чтение 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Русский язык',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Русский язык 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Русский язык 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Литература',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Литература 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Литература 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
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
    },
  ]
};
