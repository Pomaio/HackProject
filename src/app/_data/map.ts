export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Старт',
      r: 75,
      fontSize: 20,
      iamgeUrl: 'assets/planets/jupitier.svg'
    },
    {
      name: 'Математика',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Математика 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Математика 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Математика 3',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Алгебра',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Алгебра 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Алгебра 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Алгебра 3',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Алгебра 4',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Геометрия',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Геометрия 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Геометрия 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Физика',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Химия',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Экономика',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Чистописание',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Чистописание 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Чистописание 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Чтение',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Философия',
      r: 66,
      fontSize: 30,
      iamgeUrl: 'assets/planets/jupitier.svg'
    },
    {
      name: 'Чтение 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Чтение 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Русский язык',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Русский язык 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Русский язык 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Литература',
      r: 62,
      fontSize: 20,
      iamgeUrl: 'assets/planets/venus.svg'
    },
    {
      name: 'Литература 1',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
    },
    {
      name: 'Литература 2',
      r: 44,
      fontSize: 20,
      iamgeUrl: 'assets/planets/mercury.svg'
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
