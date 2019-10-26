export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Старт',
      result: null,
      r: 175,
      fontSize: 20,
      iamgeUrl: 'assets/planets/jupitier.svg'
    },
    {
      name: 'Математика',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Математика 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Математика 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Математика 3',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Алгебра',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Алгебра 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Алгебра 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Алгебра 3',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Алгебра 4',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Геометрия',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Геометрия 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Геометрия 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Физика',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Химия',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Экономика',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Чистописание',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Чистописание 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Чистописание 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Чтение',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Философия',
      r: 166,
      fontSize: 30,
      iamgeUrl: 'assets/planets/jupitier.svg'
    },
    {
      name: 'Чтение 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Чтение 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Русский язык',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Русский язык 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Русский язык 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Литература',
      r: 162,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Литература 1',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Литература 2',
      r: 144,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
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
